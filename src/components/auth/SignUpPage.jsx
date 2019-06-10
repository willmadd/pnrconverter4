import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import Loader from "../Loader";

class SignUpPage extends Component {
  state = {
    agencyname: "",
    contactperson: "",
    iatacode: "",
    addressone: "",
    addresstwo: "",
    city: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    apiOption: "not set",
    signupdateday: "",
    signupdatemonth: "",
    signupdateyear: "",
    password_confirmation: "",
    signupSuccess: false,
    loading:false,
  };

  componentDidMount = () => {
    this.getDate();
  };

  getDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    // if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    today = yyyy + "" + mm + "" + dd;

    this.setState({
      signupdateday: dd,
      signupdatemonth: mm,
      signupdateyear: yyyy
    });
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  

    this.setState({
      loading:true,
    }, this.loginFunction())
    
    
  };

loginFunction = () =>{
  let {
    agencyname,
    contactperson,
    iatacode,
    addressone,
    addresstwo,
    city,
    email,
    phone,
    country,
    password,
    apiOption,
    signupdateday,
    signupdatemonth,
    signupdateyear,
    password_confirmation
  } = this.state;

  let user = {
    agencyname,
    contactperson,
    iatacode,
    addressone,
    addresstwo,
    city,
    email,
    phone,
    country,
    password,
    apiOption,
    signupdateday,
    signupdatemonth,
    signupdateyear,
    password_confirmation
  };
  axios
  .post(`http://localhost:8000/api/auth/signup`, user)
  .then(res => {
    this.setState({
      signupSuccess: true,
    })
  })
  .catch(error => {
    console.log(error);
  });
}

  render() {
    if(this.state.signupSuccess) {
      return <Redirect to=
      {{
        pathname:"/mailsent",
        state:{
          name: this.state.contactperson,
          email: this.state.email,
        }
      }}
      />
    }
    return (
      <div>
        <div className="blurb sign-up-page">
          <img src="./images/planetickets.svg" alt="blank flight tickets" />
          <h1>Welcome to PNR Converter! Lets get you signed up!</h1>
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
                City
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
                Confirm Email
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
                Password
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
                <input
                  type="password"
                  name="password_confirmation"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>
              
              {this.state.loading?<Loader/>:<button type="submit">
                {this.state.apiOption === "free"
                  ? "Sign Up Now!"
                  : "Continue To Checkout"}
              </button>}

              
            </form>
            <div className="whysignup">Why Sign up?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
