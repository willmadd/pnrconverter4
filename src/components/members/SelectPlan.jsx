import React, { Component } from "react";
import * as api from "../../db/api";
import Loader from "../Loader";

class SelectPlan extends Component {
  state = {
    apiOption: 1,
    redirect: false,
    plans: [],
    currency: "gbp",
    loading: false,
    message:"",
  };

  handleChange = event => {
    let { value, name } = event.target;
    if (name === "apiOption") {
      value = +value;
    }
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { apiOption, existingApiOption } = this.state;

    let user = {
      ...this.props.user,
      api: apiOption
    };

//
{this.state.apiOption !== 1 && this.state.existingApiOption!==1 && console.log('ggg')}
//

    //if plan is not free - require checkout
    // if user has selected a free plan -> either don't create a subscription or cancel
    //going from free to free, or paid to free
    if (apiOption === 1) {

      // will need to check, and if applicable cancel subscription here.
      if (existingApiOption !== 1 && existingApiOption !== "not set") {

        this.setState(
          {
            loading: true
          },
          this.updateUserAndCancel(user)
        );
      }
      api.updateUser(user).then(res => {
        // console.log(res.data.user);
        this.props.updateUser(res.data.user);
        if (this.props.toggle) {
          this.props.toggle();
        }
      });
      //if user has selected a paid plan
    } else {
      //paid to paid or free to paid

      if (
        existingApiOption !== 1 &&
        existingApiOption !== apiOption &&
        existingApiOption !== "not set"
      ) {
        //start of new code

          

        //end of new code

        //if user has selected paid plan from a paid plan
        this.setState(
          {
            loading: true
          },
          () => {
            api.updateSubscription(apiOption, this.props.user.id)
            .then(res=>{
              return api.updateUser(user)
            })
            .then(res => {
              this.props.updateUser(res.data.user);
              if (this.props.toggle) {
                this.props.toggle();
              }
            })
            .catch(err=>{
              console.log(err);
              this.setState({
                message: "There was a problem changing your plan. Please try again, or contact us for support",
                loading:false
              })
            });
          }
        );
      } else {

        //if user has selected a paid plan from a free plan

        this.props.redirect(apiOption);
      }
    }
  };

  updateUserAndCancel = user => {

    if (this.props.cancelSubscription) {
      this.props.cancelSubscription(user.id);
    }
    this.props.updateUser(user);
    api.updateUser(user);
  };

  componentDidMount = () => {

    let existingApiOption = this.props.user.api;
    let apiOption;
    if (!this.props.defaultPlan || this.props.defaultPlan === "not set") {
      apiOption = 1;
    } else {
      apiOption = +this.props.defaultPlan;
    }
    api
      .getPlans()
      .then(res => {
        // console.log(res.data.plans);
        this.setState({
          plans: res.data.plans,
          apiOption: +apiOption,
          existingApiOption: +existingApiOption || "not set"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { currency } = this.state;
    
      return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <h2>{this.props.message}</h2>
        <h3 className="warning">{this.state.message}</h3>
        <fieldset className="currency">
          <input
            className="currency-choice"
            type="radio"
            checked={currency === "gbp"}
            name="currency"
            id="gbp-radio"
            value="gbp"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="gbp-radio">GBP (£)</label>
          <input
            className="currency-choice"
            type="radio"
            checked={currency === "usd"}
            name="currency"
            id="usd-radio"
            value="usd"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="usd-radio">USD ($)</label>
          <input
            className="currency-choice"
            type="radio"
            checked={currency === "aud"}
            name="currency"
            id="aud-radio"
            value="aud"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="aud-radio">AUD ($)</label>
          <input
            className="currency-choice"
            type="radio"
            checked={currency === "eur"}
            name="currency"
            id="eur-radio"
            value="eur"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="eur-radio">EUR (€)</label>
        </fieldset>

        <fieldset>
          {this.state.plans
            .filter(plan => {
              return (
                plan.currency === this.state.currency || plan.currency === "na"
              );
            })
            .map(plan => {
              let id = Number(plan.id);
              return (
                <label
                  key={`${id}+${plan.name}`}
                  className="api-choice-container"
                >
                  {plan.currency==="na"?`${plan.description} - Free`:`${plan.description} - ${plan.currency_symbol}${
                    plan.cost
                  } per month`}
                  <input
                    type="radio"
                    name="apiOption"
                    value={id}
                    checked={this.state.apiOption === id}
                    onChange={this.handleChange}
                  />
                  <span className="checkmark" />
                </label>
              );
            })}
        </fieldset>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="button-container">

          <button className="button" type="submit">
          {this.state.apiOption === 1 ? "Sign Up To Free Plan" : this.state.existingApiOption===1? "Go To Checkout":"Change Plan"}
          </button>
          {this.props.toggleBox && <button onClick={this.props.toggleBox} className="button secondary" type="button">Cancel</button>} 
          </div>
        )}

      </form>
    );
  }
}

export default SelectPlan;
