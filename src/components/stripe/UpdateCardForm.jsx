import React, { Component } from "react";
import { StripeProvider } from "react-stripe-elements";
import {Elements} from 'react-stripe-elements';
import UpdateCardCheckoutForm from "./UpdateCardCheckoutForm";

class UpdateCardForm extends Component {
  render() {
    return (
      <div>

        <StripeProvider apiKey="pk_test_z8lxWD8alT1im8jEJMkDfKow004v41xYYA">
          <Elements>
            <UpdateCardCheckoutForm currentUser={this.props.currentUser} updateUser={this.props.updateUser} showPaymentMethod={this.props.showPaymentMethod} setMessage={this.props.setMessage}/>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default UpdateCardForm;
