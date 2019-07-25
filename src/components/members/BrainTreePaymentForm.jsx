import React, { Component } from "react";
import * as api from "../../db/api";
// var dropin = require('braintree-web-drop-in');
import dropin from "braintree-web-drop-in";
import { Redirect } from "react-router-dom";

class BrainTreePaymentForm extends Component {
  constructor(props) {
    super(props);
    // this.logMessage = this.logMessage.bind(this);
  }

  state = {
    braintreeToken: "",
    redirect: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(this.props);
    let { plan } = this.props.location.state;
    // console.log(this.props.location.state.user);
    let { id } = this.props.location.state.user;
    let currentUser = this.props.location.state.user;
    let { updateUser } = this.props;
    let redirect = this.enableRedirect;
    // console.log(redirect);
    console.log(id);
    console.log(plan);
    // console.log("update detected");
    if (prevState.braintreeToken !== this.state.braintreeToken) {
      // console.log("chane to state detected");
      var button = document.querySelector("#submit-button");

      dropin.create(
        {
          authorization: this.state.braintreeToken,
          container: "#dropin-container",
          paypal: {
            flow: "vault"
            // amount: '10.00',
            // currency: 'USD',
          }
        },
        (createErr, instance) => {
          button.addEventListener("click", () => {
            // console.log("callback called");
            instance.requestPaymentMethod((
              requestPaymentMethodErr,
              payload
            ) => {
              // Submit payload.nonce to your server
              console.log(payload);
              api
                .submitPayload(payload, plan, id)
                .then(res => {
                  console.log(res.data);
                  let user = {
                    ...currentUser,
                    api: res.data.plan.id
                  };
                  console.log(user);
                  api.updateUser(user)
                  .then(res=>{
                    console.log('new user')
                    console.log(res.data)
                    updateUser(res.data.user);
                  })
                  // console.log(redirect);
                  this.enableRedirect();
                })
                .catch(err => {
                  console.log(err);
                });
            });
          });
        }
      );
    }
  };

  enableRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  componentDidMount = () => {
    api.getBraintreeToken().then(res => {
      this.setState({
        braintreeToken: res.data.data.token
      });
    });
  };

  render() {
      if(this.state.redirect) {
        return  <Redirect to={{
          pathname: '/members',
      }}/>
    }
    return (
      <div>
        <h1>API Checkout</h1>
        <h3>Powered by Braintree and Paypal</h3>

        <div id="dropin-container" />
        <button id="submit-button">Request payment method</button>
      </div>
    );
  }
}

export default BrainTreePaymentForm;
