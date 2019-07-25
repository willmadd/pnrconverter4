import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import {StripeProvider} from 'react-stripe-elements';
import StripeCheckout from '../stripe/StripeCheckout'

class StripePaymentForm extends Component {

  state = {
    braintreeToken: "",
    redirect: false
  };

  render() {

      if(this.state.redirect) {
        return  <Redirect to={{
          pathname: '/members',
      }}/>
    }
    let currentUser = this.props.location.state.user;
    let { plan } = this.props.location.state;
    return (
      <StripeProvider apiKey="pk_test_z8lxWD8alT1im8jEJMkDfKow004v41xYYA">
        <StripeCheckout user_id={currentUser.id} plan={plan} updateUser={this.props.updateUser} currentUser={currentUser}/>
      </StripeProvider>
    );
  }
}

export default StripePaymentForm;
