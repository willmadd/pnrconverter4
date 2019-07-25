import React, { Component } from "react";
import * as api from "../../db/api";
import Loader from "../Loader";

class PasswordReset extends Component {
  state = {
    user: {},
    password: "",
    password_confirmation: "",
    passwordVerifyError: false,
    passwordConfirmError: false,
    loading:false,
    message:"",
    hideForm:false
  };

  componentDidMount = () => {
    let { token } = this.props.match.params;
    api
      .passwordReset(token)
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState(
      {
        [name]: value
      },
      ()=>{this.validate(name, value)}
    );
  };

  validate = (name, value) => {
    if (name === "password") {
      if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value)) {
        this.setState({
          passwordVerifyError: false
        });
      } else {
        this.setState({
          passwordVerifyError: true
        });
      }
    } else if (name === "password_confirmation") {
      let { password, password_confirmation } = this.state;
      if (password !== password_confirmation) {
        this.setState({
          passwordConfirmError: true
        });
      } else {
        this.setState({
          passwordConfirmError: false
        });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        loading: true
      },
      this.resetFunction()
    );
    
  };

resetFunction=()=>{
  let user = {
    email: this.state.user.email,
    token: this.state.user.token,
    password: this.state.password,
    password_confirmation: this.state.password_confirmation
  };
  console.log(user);
  api.submitNewPassword(user).then(res => {
    console.log("response is...");
    console.log(res);
    this.setState({
      hideForm:true,
    })
  })
  .catch(err=>{
    let message="";
    if (err.response) {
      switch(err.response.status) {
        case 200:
          message = "Your Password has been changed. Please log in again to access your account"
          break;
          case 422:
              message = "The passwords you entered do not match, please try again"
              break;
        default:
            message = "Your Password reset token is not valid. You can not change your password"
      };
      this.setState({
        message,
        loading: false,
      });
    }
  });
}


  render() {
    return (
      <div>
        <div className="blurb password-reset">
          <div className="head">
            <h1>Password Reset</h1>
            <h3>{`Please Enter a new password for ${
              this.state.user.email
            }`}</h3>
            {this.state.hideForm&&<h3 className="warning">Your Password has been changed, please log in to continue</h3>}
          </div>
          <div className="content">
            <form action="" className={this.state.hideForm?"hidden":undefined}>
              <h3 className="warning">{this.state.message}</h3>
              <label htmlFor="password">Please enter a new password:</label>
              <p className="warning password-warning">
                {this.state.passwordVerifyError &&
                  "Must be 8 characters long, include one upper case letter, one lowercase letter and a number"}
              </p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter a password here"
                onChange={this.handleChange}
              />
              <label id="conf-pw-label" htmlFor="password_confirmation">
                Please confirm your password:
              </label>
              <p className="warning password-warning">
                {this.state.passwordConfirmError && "Passwords must Match"}
              </p>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                onChange={this.handleChange}
                placeholder="confirm your password here"
              />
              {this.state.loading?<Loader />:<button
                disabled={
                  !this.state.password||
                  !this.state.password_confirmation ||
                  this.state.passwordVerifyError  ||
                  this.state.passwordConfirmError
                }
                className="button"
                type="button"
                onClick={this.handleSubmit}
              >
                Change Password
              </button>}
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordReset;
