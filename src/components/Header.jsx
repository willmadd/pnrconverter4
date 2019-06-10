import Translate from "../translations/Translate";
import SignUp from "./auth/SignUpBox";
import React, { Component } from "react";
import * as api from '../db/api';
import { Redirect } from 'react-router-dom'


class Header extends Component {
  state = {
    signup: false,
    members: false,
  };

componentDidUpdate=(prevProps, prevState)=>{
if(this.state.members !== prevState.members){
  this.setState({
    members:false,
  })
}
}

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

  membersArea = () => {
this.setState({
  members:true,
})
  }

  render() {
    let { signup, members } = this.state;
    if(members) {
      return <Redirect to=
      {{
        pathname:"/members",
      }}
      />
    }
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
            <button onClick={()=> this.membersArea()}>My Account</button>
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
