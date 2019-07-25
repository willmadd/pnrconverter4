import React, { Component } from "react";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";

import paypal from "paypal-checkout";
import ReactDOM from "react-dom";
const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });

// let PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

class PaypalForm extends Component {
  state = {};

  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01"
          }
        }
      ]
    });
  }
  onApprove(data, actions) {
    return actions.order.capture();
  }

  render() {
    return (
      <div>
        <h1>Paypal integration</h1>

        <PayPalButton
          createOrder={(data, actions) => this.createOrder(data, actions)}
          onApprove={(data, actions) => this.onApprove(data, actions)}
        />

        {/* <PayPalButton
            // env={env}
            // client={client}
            // commit={commit}
            payment={this.payment}
            onAuthorize={this.onAuthorize}
            // onCancel={onCancel}
            // onError={onError}
            />
        </div> */}
        {/* <PayPalButton
          amount="0.01"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            //   OPTIONAL: Call your server to save the transaction
            //   return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //       orderID: data.orderID
            //     })
            //   });
            return axios({
              method: "post",
              url: `http://localhost:8000/api/paypal-transaction-complete`,
              data: {
                orderID: data.orderID,
                everything: data,
                details: details
              }
            }).then(res => {
              console.log(res.data);
            });
          }}
        /> */}
      </div>
    );
  }
}

export default PaypalForm;
