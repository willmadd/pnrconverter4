import React, { Component } from "react";
import * as api from "../../db/api";
import SignInModal from "./SignInModal";
import { Redirect } from 'react-router-dom'

class SignUpActivation extends Component {
  state={
    user:{},
    apiOption: 'free',
    redirect:false,
  }

  componentDidMount = () => {
    let {token} = this.props.match.params;
    api.tokenActivate(token)
    .then(res=>{
      this.setState({
        user:res.data,
        message:`Hi ${res.data.name}, Thanks for Signing up. Your account has now been activated. Please sign in to continue!`
      })
    })
    .catch(error=>{
      if (error.response) {
        switch (error.response.status) {
          case 404:
            this.setState({
              message: "Could not activate you account. Your token is invalid!"
            });
            break;
          default:
            this.setState({
              message: "There was an error activating our account!"
            });
        }
      } else {
        this.setState({
          message:
            "Could not connect to the server. Please check your internet connection"
        });
      }
    })
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

// redirectToMembers=()=>{
//   console.log('redirect to members activated')
//   this.setState({
//     redirect:true,
//   })
// }

  render() {
    if(this.state.redirect) {
      return  <Redirect to={{
        pathname: '/members',
    }}/>
  }
    return (

        <div className="blurb signup-activation-page">
          <h1>Activate Your Account</h1>
          <h3>{this.state.message}</h3>
          <div className="sign-up-activation-content">
          <SignInModal setTokenInStorage={this.props.setTokenInStorage} redirect={this.redirectToMembers} setUserInState={this.props.setUserInState}/>
          <div className="img-stamps"></div>
          </div>
          
          </div>

    );
  }
}

export default SignUpActivation;
