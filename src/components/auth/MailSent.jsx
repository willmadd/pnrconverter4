import React, { Component } from "react";

class MailSent extends Component {
  state = {
  };

  componentDidMount = () => {
  };

  

  render() {
    return (
      <div>
        <div className="blurb mail-sent-page">
          Thanks for signing up {this.props.location.state.name.toLowerCase()}, 
          We've sent an email to {this.props.location.state.email}! Please confirm your account
        </div>
      </div>
    );
  }
}

export default MailSent;
