import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../Loader";
import * as api from "../../db/api";

class SignUpPage extends Component {
  state = {
    agencyname: "",
    contactperson: "",
    iatacode: "",
    addressone: "",
    addresstwo: "",
    city: "",
    email: "",
    confirmemail: "",
    phone: "",
    country: "",
    password: "",
    apiOption: "not set",
    signupdateday: "",
    signupdatemonth: "",
    signupdateyear: "",
    password_confirmation: "",
    signupSuccess: false,
    loading: false,
    passwordVerifyError: false,
    passwordConfirmError: false,
    emailVerifyError: false,
    emailConfirmError: false,
    plans: [],
    currency: "gbp",
    message:""
  };

  componentDidMount = () => {
    this.getDate();
    api
      .getPlans()
      .then(res => {
        this.setState({
          plans: res.data.plans
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    today = yyyy + "" + mm + "" + dd;

    this.setState({
      signupdateday: dd,
      signupdatemonth: mm,
      signupdateyear: yyyy
    });
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
    } else if (name === "email") {
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
    } else if ((name = "confirmemail")) {
      let { email, confirmemail } = this.state;
      if (email !== confirmemail) {
        this.setState({
          emailConfirmError: true
        });
      } else {
        this.setState({
          emailConfirmError: false
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
      this.loginFunction()
    );
  };

  passwordVerify = e => {};

  

  loginFunction = () => {
    let user = this.state;
    api
      .signUp(user)
      .then(res => {
        this.setState({
          signupSuccess: true
        });
      })
      .catch(err => {
        let message = "";
        if (err.response) {
          window.scrollTo(0, 0);
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          if (err.response.data.errors.email[0]) {
            message = "There's already an account with this email address. Please use it to sign in, or try again with a different email address";
          } else {
            switch (err.response.status) {
              case 422:
                message =
                  "Your details are not valid. Please check the fields and make sure you're filled everything in correctly!";
                break;
              case 500:
                message =
                  "We could not connect to the server. Please check you have an internet connection";
                break;
              default:
                message =
                  "Something went wrong, we're not sure what. Please contact us using the form in the menu for further assistance";
            }
          }
          this.setState({
            message,
            loading:false,
          });
        }
      });
  };

  render() {
    if (this.state.signupSuccess) {
      return (
        <Redirect
          to={{
            pathname: "/mailsent",
            state: {
              name: this.state.contactperson,
              email: this.state.email
            }
          }}
        />
      );
    }
    let {
      passwordVerifyError,
      passwordConfirmError,
      emailVerifyError,
      emailConfirmError,
      agencyname,
      contactperson,
      addressone,
      city,
      email,
      confirmemail,
      phone,
      country,
      password,
      password_confirmation,
      message
    } = this.state;

    return (
      <div>
        <div className="blurb sign-up-page">
          <img src="./images/planetickets.svg" alt="blank flight tickets" />
          <h1>Welcome to PNR Converter! Lets get you signed up!</h1>
          <h3 className="warning">{message}</h3>
          <div className="form-container">
            <form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <label>
                Contact Person
                <input
                  type="text"
                  name="contactperson"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>
              <label>
                Agency Name
                <input
                  type="text"
                  name="agencyname"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                IATA Code (optional)
                <input
                  type="text"
                  name="iatacode"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Address Line 1
                <input
                  type="text"
                  name="addressone"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Address Line 2 (Optional)
                <input
                  type="text"
                  name="addresstwo"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                City & Post Code
                <input
                  type="text"
                  name="city"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Country
                <input
                  type="text"
                  name="country"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Email
                <p className="warning password-warning">
                  {emailVerifyError && "Please Enter a Valid Email address"}
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="We'll send activation instructions here!"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Confirm Email{" "}
                <p className="warning password-warning">
                  {emailConfirmError && "Email addresses must Match"}
                </p>
                <input
                  type="text"
                  name="confirmemail"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Phone Number
                <input
                  type="text"
                  name="phone"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              <label>
                Password{" "}
                <p className="password-warning">
                  Must be 8 characters long, include one upper case letter, one
                  lowercase letter and a number
                </p>
                <p className="warning password-warning">
                  {passwordVerifyError && "Password not secure enough"}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>
              <label>
                Verify Password
                <p className="warning password-warning">
                  {passwordConfirmError && "Passwords must match"}
                </p>
                <input
                  type="password"
                  name="password_confirmation"
                  onKeyUp={e => {
                    this.handleChange(e);
                  }}
                />
              </label>

              {this.state.loading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  disabled={
                    emailConfirmError ||
                    emailVerifyError ||
                    passwordConfirmError ||
                    passwordVerifyError ||
                    !agencyname ||
                    !contactperson ||
                    !addressone ||
                    !city ||
                    !email ||
                    !confirmemail ||
                    !phone ||
                    !country ||
                    !password ||
                    !password_confirmation
                  }
                >
                  Sign Up Now!
                </button>
              )}
            </form>
            <div className="whysignup">
              <h2>Why Sign up?</h2>
              <p>Join the Growing number of apps powered by PNR Converter.</p>
              <ul className="why-sign-up-list">
                <h3>Reasons to sign up:</h3>
                <li>
                  <h5>
                    Get the most detailted API response anywhere on the web
                  </h5>
                </li>
                <li>
                  <h5>The Cheapest webservice for PNR Conversion</h5>
                </li>
                <li>
                  <h5>No Contracts - Cancel At Any Time</h5>
                </li>
                <li>
                  <h5>Interactive Dashboard</h5>
                </li>
                <li>
                  <h5>Technical Support to help get you set up</h5>
                </li>
                <li>
                  <h5>Free Plan to allow you to get set up</h5>
                </li>
                <li>
                  <h5>Regularly updated to ensure information is up to date</h5>
                </li>
              </ul>
              <ul className="price-list">
                <h3>Available Plans:</h3>
                {this.state.plans.map(plan => {
                  // let id = Number(plan.id);
                  return (
                    <li key={`${plan.id}${plan.name}`}>
                      <h5>
                        {`${
                          plan.description
                        } - ${this.state.currency.toUpperCase()} ${
                          plan.cost
                        } per month`}
                      </h5>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
