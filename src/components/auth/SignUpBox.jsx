import React, { Component } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    redirect: false,
    membersRedirect: false,
  };
  pwReset = () => {
    this.setState({
      redirect: true
    });
  };


  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/passwordreset"
          }}
        />
      );
    }

    return (
      <div className="sign-up-window">
        <div className="sign-up-box">
          <div className="signup-heading">
            <h2>Sign Up Or Sign In</h2>
            <img src="/images/icons/cancel.svg" className="close" onClick={() => this.props.activateSignUp()} alt="close box"/>
          </div>
          <div className="sign-up-container">
            <div className="signin">
              <SignInModal
                redirect={this.pwReset}
                setTokenInStorage={this.props.setTokenInStorage}
                activateSignUp={this.props.activateSignUp}
                pwRedirect={this.pwReset}
                setUserInState={this.props.setUserInState}
              />
            </div>
            <div className="signup">
              <SignUpModal activateSignUp={this.props.activateSignUp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
