import React, { Component } from "react";
import * as api from "../../db/api";
import { Redirect } from "react-router-dom";

class SignInModal extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    redirect: false
  };
  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  redirectToPWReset = () => {
    this.props.pwRedirect();
  };

  handleSubmit = e => {
    e.preventDefault();
    let { username, password } = this.state;
    let remember_me = true;
    let user = { email: username, password, remember_me };
    api
      .userSignIn(user)
      .then(res => {
        return this.props.setTokenInStorage(res.data.access_token);
      })
      .then(res => {
        this.props.setUserInState(res.data);
        this.setState(
          {
            redirect: true
          },
          () => {
            if(this.props.activateSignUp){
              this.props.activateSignUp()
            }
          }
        );
      })
      .catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 422:
              this.setState({
                error: "Please Enter a Valid Email address"
              });
              break;
            case 401:
              this.setState({
                error: "Login Details not Recognised"
              });
              break;
            case 403:
              this.setState({
                error:
                  "Could not connect to the server. Please check your internet connection"
              });
              break;
            case 429:
              this.setState({
                error:
                  "Too many unsuccessful login attempts. For security reasons your login has been temporarily blocked. Please wait 3 minutes and try again"
              });
              break;
            default:
              this.setState({
                error: "There was an error signing you in!"
              });
          }
        } else {
          this.setState({
            error:
              "Could not connect to the server. Please check your internet connection"
          });
        }
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/members" />;
    }
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <h3 className="underline">Existing Customers</h3>
        <div className="models">
          <h3 className="warning">{this.state.error}</h3>
          <label>
            Email Address:
            <input
              type="text"
              name="username"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </label>
          <button className="button" type="submit">Sign In</button>
          <h6 className="password-reset" onClick={this.redirectToPWReset}>
            I've forgotten my password
          </h6>
        </div>
      </form>
    );
  }
}

export default SignInModal;
