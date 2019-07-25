import React, { Component } from "react";
import sha256 from "js-sha256";
import * as api from "../../db/api";

class ApiKey extends Component {
  state = {
    token: ""
  };

  getToken = id => {
    api
      .getToken(id)
      .then(res => {
        this.setState({
          token: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { id } = this.props.user;
    let { token } = this.state;
    let requestUrl = "https://api.pnrconverter.com/api";
    return (
      <div className="member-content-area">
        <p>Public API Key: {sha256(id + "pnrc")} </p>
        <div className="private-key-container">
          <p>Private API Key:</p>
          {token ? (
            <p>{`${token}`}</p>
          ) : (
            <p className="warning" onClick={() => this.getToken(id)}>
              Click here to reveal
            </p>
          )}
        </div>
        <h2 className="section-title">How to Use the PNR Converter API</h2>
        <p>
          Now you've signed up, you have everything you need to use the PNR
          Converter API. Above this text you'll see two keys, a public key and a
          private key. For security reasons, the private key can only be
          accessed by clicking on the link! These keys are unque to your account
          and should be kept private
        </p>
        <p>
          In order to use PNR Converter API you'll need to send these keys as
          headers in a post request. You'll need to send three items in the
          header of any request as per below, don't include the square brackets
        </p>

        <p>Content-Type: application/x-www-form-urlencoded</p>
        <p>PUBLIC_APP_KEY: [your public app key]</p>
        <p>PRIVATE_APP_KEY: [your private app key]</p>
        <p>
          Then in the body of the request you'll need to send through the PNR
          with the key of pnr
        </p>
        <p>
          If this dosn't make sense then you might want to ask a developer for
          advice, or alternitively follow the tutorial below on how to use our
          API with <a href="https://www.getpostman.com/">Postman</a>
        </p>
        <h4>Step 1</h4>
        <p>
          If you havn't already, then download postman using the above link!
        </p>
        <p>
          Open up Postman and you should be see something like the following;
        </p>
        <img src="./images/howto/postman.jpg" alt="postman welcome screen" />
        <h4>Step 2</h4>
        <p>Get the request type to 'POST'</p>
        <img src="./images/howto/postrequest.jpg" alt="postman post request" />
        <p>Under 'Enter Request URL' enter {requestUrl}</p>
        <h4>Step 3</h4>
        <p>
          Under Headers tab, you'll need to send three headers to PNR Converter.
          This is your authentication, so we know who's sending us requests
        </p>
        <p>Content-Type: application/x-www-form-urlencoded</p>
        <p>PUBLIC_APP_KEY: [your public app key]</p>
        <p>PRIVATE_APP_KEY: [your private app key]</p>
        <p>For Example</p>
        <img src="./images/howto/headers.jpg" alt="postman post request" />
        <h4>Step 4</h4>
        <p>
          You'll now need to send us the PNR. Under the 'Body' tab, enter a key
          of 'pnr', and then for the value, enter your PNR
        </p>
        <img src="./images/howto/pnrbody.jpg" alt="postman body request" />
        <h4>Step 5</h4>
        <p>Hit Send</p>
        <h4>Step 6</h4>
        <p>
          Enjoy a nicely formatted JSON response with a breakdown of all flight
          and passenger details*. Passenger details currently in development
        </p>
        <pre className="json-response">
          {`{
  "flightData": {
    "info": [
      {
      "agencyName": "PNR Converter",
      "requestsLeft": 9999
      }
      ],
    "names": [],
    "flights": [
      {
      "dep": {
        "airportname": "Incheon Airport",
        "cityname": "Seoul",
        "countryname": "South Korea",
        "airportcode": "ICN",
        "latitude": "37.469100950",
        "longitude": "126.450996400",
        "timezone": "Asia/Seoul"
      },
        "arr": {
        "airportname": "Kuala Lumpur Intl Airport",
        "cityname": "",
        "countryname": "Malaysia",
        "airportcode": "KUL",
        "latitude": "2.745579958",
        "longitude": "101.709999100",
        "timezone": "Asia/Kuala_Lumpur"
      },
      "flt": {
        "flightNo": "67",
        "iatacode": "MH",
        "name": "Malaysia Airlines",
        "operated_by": "Malaysia Airlines",
        "cabin": "Economy",
        "class": "Y",
        "aircraft": "Airbus A380",
        "departure": {
        "string": "2020-01-05 11:00",
        "day": "Sun"
      },
      "arrival": {
        "string": "2020-01-05 16:45",
        "day": "Sun"
      },
      "transit_time": {
        "minutes": 35,
        "hours": 5,
        "days": 0,
        "months": 0
      },
      "duration": {
        "minutes": "45",
        "hours": "6"
      },
      "distance": {
        "miles": 2841,
        "km": 4572
      },
      "svg-logo-high-res": "https://www.pnrconverter.com/images/airlines/mh.svg",
      "png-logo-low-res": "https://www.pnrconverter.com/images/airlines/png/150/mh.png"
      }
      },
      {
      "dep": {
        "airportname": "Kuala Lumpur Intl Airport",
        "cityname": "",
        "countryname": "Malaysia",
        "airportcode": "KUL",
        "latitude": "2.745579958",
        "longitude": "101.709999100",
        "timezone": "Asia/Kuala_Lumpur"
      },
      "arr": {
        "airportname": "Adelaide Intl Airport",
        "cityname": "Adelaide",
        "countryname": "Australia",
        "airportcode": "ADL",
        "latitude": "-34.944999690",
        "longitude": "138.531005900",
        "timezone": "Australia/Adelaide"
      },
      "flt": {
        "flightNo": "139",
        "iatacode": "MH",
        "name": "Malaysia Airlines",
        "operated_by": "Malaysia Airlines",
        "cabin": "Economy",
        "class": "Y",
        "aircraft": "Airbus A330-300",
        "departure": {
        "string": "2020-01-05 22:20",
        "day": "Sun"
      },
      "arrival": {
        "string": "2020-01-06 08:00",
        "day": "Mon"
      },
      "transit_time": {},
        "duration": {
        "minutes": "10",
        "hours": "7"
      },
      "distance": {
        "miles": 3475,
        "km": 5593
      },
      "svg-logo-high-res": "https://www.pnrconverter.com/images/airlines/mh.svg",
      "png-logo-low-res": "https://www.pnrconverter.com/images/airlines/png/150/mh.png"
      }
      }
    ]
  }
}`}
        </pre>
      </div>
    );
  }
}

export default ApiKey;
