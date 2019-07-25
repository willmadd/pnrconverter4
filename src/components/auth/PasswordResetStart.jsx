import React, { Component} from "react";
import * as api from "../../db/api";
import ReCAPTCHA from "react-google-recaptcha";

class PasswordResetStart extends Component {
  state = {
    email: "",
    message: "",
    emailVerifyError: false,
    captchaToken:"",
  };

  onChange = captchaToken => {
    this.setState({
      captchaToken,
    })
  };

  validate = (name, value) => {
    if (name === "email") {
      if (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
      ) {
        this.setState({
          emailVerifyError: false
        });
      } else {
        this.setState({
          emailVerifyError: true
        });
      }
    }
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validate(name, value);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();


    api.sendPasswordReset(this.state.email, this.state.captchaToken).then(res => {
      this.setState({
        message: `If we have your email address on file we will send you a password reset link. If it dosn't come through, please check your Junk mail filter.`
      });
    })
    .catch(err=>{


      let message="";
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        switch(err.response.status) {
          case 422:
            message = "Please fill both your email address and verify you're a human"
            break;
          case 401:
              message = "reCAPTCHA was incorrect - please try again"
            break;
            case 404:
                message = "If we have your email address on file we will send you a password reset link. If it dosn't come through, please check your Junk mail filter."
              break;
          default:
              message = "Something went wrong, we're not sure what. Please contact us using the form in the menu for further assistance"
        };
        this.setState({
          message,
        });
      }
    });
  };

  render() {
    return (

        <div className="blurb password-reset">
          <h1>Password Reset</h1>
          <div className="content">
            <div className="left-box">
              <h3>
                Please enter your email address to receive a password reset link
              </h3>
              <h3 className="warning">{this.state.message}</h3>
              <form action="">
                <input type="email" name="email" onChange={this.handleChange} placeholder="email address"/>
                <h5>
                  {this.state.emailVerifyError &&
                    `Please enter a valid email address`}
                </h5>
                <ReCAPTCHA
                  sitekey="6Lcloa0UAAAAAMbKnsoubxN5sVVWGepMy9JNfkES"
                  onChange={this.onChange}
                />

                <button className="button" type="button" onClick={this.handleSubmit}>
                  Send Reset Link
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default PasswordResetStart;
