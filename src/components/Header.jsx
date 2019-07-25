import Translate from "../translations/Translate";
import SignUp from "./auth/SignUpBox";
import React, { Component } from "react";
import * as api from "../db/api";
import { Redirect } from "react-router-dom";

class Header extends Component {
  state = {
    signup: false,
    members: false,
    allowSignup: false,
    logout:false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.members !== prevState.members) {
      this.setState({
        members: false
      });
    }
    if (this.state.logout !== prevState.logout) {
      this.setState({
        logout: false
      });
    }
  };

  componentDidMount = () => {
    document.addEventListener("keypress", this._handleKeyDown);
  };

  _handleKeyDown = e => {
    if (e.key === "D") {
      this.setState({
        allowSignup: true
      });
      }
    else{
      this.setState({
        allowSignup:false,
      })
    }
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
    this.setState({
      logout:true
    })
  };

  membersArea = () => {
    this.setState({
      members: true
    });
  };

  render() {
    let { signup, members, logout } = this.state;
    if (members) {
      return (
        <Redirect
          to={{
            pathname: "/members",

          }}
        />
      );
    }
    if (logout) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state:{
              user: this.state.user,
            }
          }}
        />
      );
    }
    return (
      <header>
        <a
          href={
            this.props.language === "en" ? "/" : `/intl/${this.props.language}`
          }
        >
          <img
            src="/images/pnrc-logo2.svg"
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

        {this.props.user && this.props.user.name ? (
          <div>
            <button className="button" onClick={() => this.membersArea()}>
              <p className="icon-members">{`${this.props.user.api==='not set'?'My Account': 'My Account'}`}</p>
            </button>
            <button className="button logout " onClick={() => this.logOut()}>
              <p className="icon-logout">Logout</p>
            </button>
          </div>
        ) : (
          <button
            className="button disabled"
            onClick={() => {
              this.activateSignUp();
            }}
            
            disabled={!this.state.allowSignup}
          >
            API (Coming Soon)
          </button>
        )}

        {signup && (
          <SignUp
            setTokenInStorage={this.props.setTokenInStorage}
            activateSignUp={this.activateSignUp}
            membersArea={this.membersArea}
            setUserInState={this.props.setUserInState}
          />
        )}
      </header>
    );
  }
}

export default Header;
