import React, { Component } from "react";

class MailSent extends Component {
  state = {};

  componentDidMount = () => {};

  render() {
    return (
      <div className="blurb mail-sent-page">
        <h3>
          Thanks for signing up {this.props.location.state.name.toLowerCase()},{" "}
        </h3>
        <h3>
          We've sent an email to {this.props.location.state.email}! Please check
          your emails and click on the activation link in the email to activate your
          account. If you can't see an email, please check your spam box!
        </h3>
      </div>
    );
  }
}

export default MailSent;
