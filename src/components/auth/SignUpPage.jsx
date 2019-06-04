import React, { Component } from "react";
import Header from "../Header";
import Nav from "../Nav";

class SignUpPage extends Component {
  state = {
    agencyname: "",
    contactperson: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    apiSignupRadio: "free"
  };

  componentDidMount=()=>{
    this.getDate();
  }

getDate=()=>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    // if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    today = yyyy+""+mm+""+dd;

    document.getElementById("signupdateday").value = dd;
    document.getElementById("signupdatemonth").value = mm;
    document.getElementById("signupdateyear").value = yyyy;
}

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { agencyname, contactperson } = this.state;
    alert(`You've entered agency name ${agencyname} & ${contactperson}`);
  };

  render() {
    return (
      <div>
        <Header />
        <Nav value={"en"} />

        <div className="blurb sign-up-page">
          <img src="./images/planetickets.svg" alt="blank flight tickets" />
          <h1>Welcome to PNR Converter! Lets get you signed up!</h1>
          <div className="form-container">
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
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
                  name="verifypassword"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </label>
              <fieldset>
                <label className="api-choice-container">
                  Free - 12 Requests per day
                  <input
                    type="radio"
                    checked="checked"
                    name="apiSignupRadio"
                    value="free"
                  />
                  <span className="checkmark" />
                </label>
                <label className="api-choice-container">
                  5,000 Requests per Month - £17.00
                  <input type="radio" name="apiSignupRadio" value="5000" />
                  <span className="checkmark" />
                </label>
                <label className="api-choice-container">
                10,000 Requests per Month - £32.00
                  <input
                    type="radio"
                    name="apiSignupRadio"
                    value="10000"
                  />
                  <span className="checkmark" />
                </label>

                <label className="api-choice-container">
                100,000 Requests per Month - £180.00
                  <input
                    type="radio"
                    name="apiSignupRadio"
                    value="100000"
                  />
                  <span className="checkmark" />
                </label>

                <label className="api-choice-container">
                500,000 Requests per Month - £700.00
                  <input
                    type="radio"
                    name="apiSignupRadio"
                    value="500000"
                  />
                  <span className="checkmark" />
                </label>

                <label className="api-choice-container">
                1,000,000 Requests per Month - £950.00
                  <input
                    type="radio"
                    name="apiSignupRadio"
                    value="1000000"
                  />
                  <span className="checkmark" />
                </label>

                <label className="api-choice-container">
                5,000,000 Requests per Month - £3000.00
                  <input
                    type="radio"
                    name="apiSignupRadio"
                    value="5000000"
                  />
                  <span className="checkmark" />
                </label>

                <label className="api-choice-container">
                  10,000,000 Requests per Month - £4500.00
                  <input type="radio" name="apiSignupRadio" value="10000000" />
                  <span className="checkmark" />
                </label>
              </fieldset>
              <input type="hidden" name="signupdateday" id="signupdateday"/>
              <input type="hidden" name="signupdatemonth" id="signupdatemonth"/>
              <input type="hidden" name="signupdateyear" id="signupdateyear"/>
              <button type="submit">Sign Up Now!</button>
            </form>
            <div className="whysignup">Why Sign up?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
