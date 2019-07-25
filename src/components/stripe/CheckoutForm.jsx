// CheckoutForm.js
import React from "react";
import {
  injectStripe,
  CardElement,
  // ReactStripeElements
} from "react-stripe-elements";
import Axios from "axios";
import * as api from "../../db/api";
import Loader from "../Loader";
import { Redirect } from "react-router-dom";

class CheckoutForm extends React.Component {
  state = {
    name: "",
    amount: "",
    plan: {
      description: "",
      name: "",
      cost: ""
    },
    loading: false,
    errorMessage: "",
    redirect: false
  };

  componentDidMount = () => {
    api
      .getPlanBySlug(this.props.plan)
      .then(res => {
        this.setState({
          plan: res.data.plan
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.setState(
      {
        loading: true
      },
      this.processPayment
    );
  };

  enableRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  processPayment = async () => {
    let { updateUser } = this.props;
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
      });
      let amount = this.state.amount;
      console.log(token);
      api.processPayment(token, amount, this.props.user_id, this.props.plan)
        .then(res => {
          console.log(res);
          let {currentUser} = this.props;
          if (res.status === 200) {
            console.log(this.props.currentUser)
            let user = {
              ...currentUser,
              api: res.data.plan
            };
            api.updateUser(user)
            .then(res=>{
              updateUser(res.data.user);
            })
            this.enableRedirect();
          }
        })
        .catch(err => {
            console.log(err);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            if ((err.response.status = 400)) {
              this.setState({
                loading: false,
                errorMessage: `Your card issuer has not been authorised the transaction. Please double check your details and try again. If the problem persists please contact  your bank`
              });
            }
          }
        });
    } catch (e) {
      console.log(`error in catch`);
      throw e;
    }
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/members"
          }}
        />
      );
    }
    return (
      <div className="stripeSignup">
        <img src="./images/checkoutheader.svg" alt="" />
        <header>
          <img src="./images/stripelogo2.png" alt="" />
          <h1>PNR Converter Checkout</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmit} className="cc-form">
            <h3 className="warning">{this.state.errorMessage}</h3>
            <input
              type="text"
              name="name"
              id="stripe-name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <CardElement className="card-element" />
            {this.state.loading ? (
              <Loader />
            ) : (
              <button className="button">Start Subscription</button>
            )}
          </form>
          <div className="summary">
            <h2>Summary</h2>
            <div className="summary-content">
              <img src="./images/pnrc-logo2.svg" alt="" />
              <p>{`You are signing up to the following API plan:`}</p>
              <h5>Monthly API Calls:</h5>{" "}
              <p className="">{`${this.state.plan.description}`}</p>
              <h5>Monthly Cost:</h5>{" "}
              <p>{`${this.state.plan.currency_symbol}${
                this.state.plan.cost
              } per month (${this.state.plan.currency &&
                this.state.plan.currency.toUpperCase()})`}</p>
              <h5>First Charge:</h5>
              <p>
                {new Date().toLocaleString("en-us", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </p>
              <h5>Recurring</h5>
              <p>
                You will be billed monthly unless you cancel your subscription
              </p>
              <h5 className="grid-span warning">
                You can cancel your subscription at any time - no contract
              </h5>
              <h5 className="grid-span warning">Upgrade at any time</h5>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
