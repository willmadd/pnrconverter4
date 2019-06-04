import React, { Component } from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-window">
        <div className="sign-up-box">
          <h2>Sign up or Sign In</h2>
          <div className="sign-up-container">
            <div className="signin">
              <SignInModal setTokenInStorage={this.props.setTokenInStorage} activateSignUp={this.props.activateSignUp}/>
            </div>
            <div className="signup">
              <SignUpModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
