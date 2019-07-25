// CheckoutForm.js
import React from "react";
import {
  injectStripe,
  CardElement
  // ReactStripeElements
} from "react-stripe-elements";
import * as api from "../../db/api";
import Loader from "../Loader";

class UpdateCardCheckoutForm extends React.Component {
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
    let { updateUser, currentUser } = this.props;
    try {
      let { token } = await this.props.stripe.createToken({
        name: this.state.name
      });
      api
        .updateCardDetails(token.id, currentUser.id)
        .then(res => {
          let { currentUser } = this.props;
          if (res.status === 200) {
            let user = {
              ...currentUser,
              card_last_four: res.data.user.card_last_four,
              card_brand: res.data.user.card_brand
            };
            api.updateUser(user).then(res => {
              updateUser(res.data.user);
              let message = `Your card has been updated to a ${
                res.data.user.card_brand
              } ending in ${
                res.data.user.card_last_four
              }. This card will be used for all future subscription payments. Your payment date and plan will remain unchanged.`;
              this.props.setMessage(message);
              window.scrollTo(0, 0);
              this.setState(
                {
                  loading: false
                },
                () => this.props.showPaymentMethod()
              );
            });
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
    let { currentUser } = this.props;
    return (
      <div className="update-card">
        <h2>Update your Card Details</h2>
        <h5>{`We currently have a ${
          currentUser.card_brand
        } card on file ending ${
          currentUser.card_last_four
        }. If you would like to bill your subscription to a different card, please enter the details below.`}</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="stripe-name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Cardholder name"
            className="cardholder-name"
          />
          <CardElement className="card-element" />
          {this.state.loading ? (
            <Loader />
          ) : (
            <div className="edit-button-container">
              <button className="button">Update Payment Method</button>
              <button
                type="button"
                onClick={this.props.showPaymentMethod}
                className="button secondary"
              >
                Cancel
              </button>
            </div>
          )}

          <p className="footnote">
            All payments are provided by our payment partner stripe.com. PNR
            Converter does not store your card details on our servers
          </p>
        </form>
      </div>
    );
  }
}

export default injectStripe(UpdateCardCheckoutForm);
