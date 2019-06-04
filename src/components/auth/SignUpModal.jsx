import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpModal extends Component {
  render() {
    return (
      <div>
        <h3 className="underline">New Customers</h3>
        <p>Sign up to receive...</p>
        <ul>
          <li>Customise the look of PNR Converter to reflect your business</li>
          <li>Unlock additional PNR Converter features</li>
          <li>Get Access to the PNR Converter API</li>
          <li>Customise quotes with additional options</li>
        </ul>
        <Link to="/signup">Sign Me Up!</Link>
      </div>
    );
  }
}

export default SignUpModal;
