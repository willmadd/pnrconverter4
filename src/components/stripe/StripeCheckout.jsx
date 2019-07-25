// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class SripeCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm user_id={this.props.user_id} plan={this.props.plan} updateUser={this.props.updateUser} currentUser={this.props.currentUser}/>
      </Elements>
    );
  }
}

export default SripeCheckout;