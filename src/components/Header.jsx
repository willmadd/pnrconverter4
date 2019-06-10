import Translate from "../translations/Translate";
import SignUp from "./auth/SignUpBox";
import React, { Component } from "react";
import * as api from '../db/api';

class Header extends Component {
  state = {
    signup: false
  };

  activateSignUp = () => {
    let signUpToggle = this.state.signup;
    this.setState({
      signup: !signUpToggle
    });
  };

  logOut = () => {
    api.logout();
    this.props.logUserOut();
  }

  render() {
    let { signup } = this.state;

    return (
      <header>
        <a href="/">
          <img
            src="/images/Pnrconverterlogosvg.svg"
            id="headerlogo"
            height="53"
            width="120"
            alt="pnrconverter logo"
          />
        </a>
        <div className="title-text-holder">
          <h1>
            <Translate string={"website.title"} />
            {this.props.user &&
              this.props.user.agencyname &&
              ` for ${this.props.user.agencyname}`}
          </h1>
          <h3>
            <Translate string={"header.tagline"} />
          </h3>
        </div>

        {this.props.user && this.props.user.name? (
          <div>
            <button>My Account</button>
            <button onClick={()=>this.logOut()}> Log Out</button>
          </div>
        ) : (
          <button
            onClick={() => {
              this.activateSignUp();
            }}
          >
            Login/Signup to API
          </button>
        )}

        {signup && (
          <SignUp
            setTokenInStorage={this.props.setTokenInStorage}
            activateSignUp={this.activateSignUp}
          />
        )}
      </header>
    );
  }
}

export default Header;
