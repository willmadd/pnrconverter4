import React from "react";

import Header from "./Header";
import Nav from "./Nav";

const Api_introduction = () => {
  return (
    <div>
                    <Header />
              <Nav value={'en'}/>
    
    <div class="blurb shadow">
    <h2>The PNR Converter API</h2>
      <p>
        {" "}
        Coming shortly we will be providing our very own API for 3rd parties to
        translate their own raw output into a JSON formatted response that
        agencies will be able to use with their own online systems.{" "}
      </p>
      <p>
        As is the PNR converter way we will be providing the most comprehensive
        API out here in terms of details returned. All data that PNR converter
        normally provides will be available including codeshares, flight
        distance and duration
      </p>
      <h4>Please Contact us for more information</h4>
      <h3>Sample post request to https://www.pnrconverter.com/my-key/api</h3>
      <pre>
        <code>


          <p>"flightData":
              "UA1180 U 10MAY 4 EWRORD HK2        C   459P 631P   752 E0"</p>
        </code>
      </pre>
      <hr />
      <h3>Sample output:</h3>
      <pre>
        <code></code>
        </pre>
        <pre>
        
         
    "flightOutput": {'['} <br/>
    &emsp; {'{'}<br/>
    &emsp;&emsp;       "flightNo": "1180",<br/>
    &emsp;&emsp;        "airlineName": "United Airlines",<br/>
    &emsp;&emsp;        "iatacode": "UA",<br/>
    &emsp;&emsp;        "bookingClass": "U",<br/>
    &emsp;&emsp;        "operatedBy": null,<br/>
    &emsp;&emsp;        "bookingCabin": "Economy",<br/>
    &emsp;&emsp;         "departure": {'{'}<br/>
    &emsp;&emsp;&emsp;            "airportName": "Newark Liberty Airport",<br/>
    &emsp;&emsp;&emsp;            "iataCode": "EWR",<br/>
    &emsp;&emsp;&emsp;            "country": "United States",<br/>
    &emsp;&emsp;&emsp;            "city": "Newark",<br/>
    &emsp;&emsp;        {'}'},<br/>
    &emsp;&emsp;        "arrival": {'{'}<br/>
    &emsp;&emsp;&emsp;            "airportName": "Chicago O'Hare Airport",<br/>
    &emsp;&emsp;&emsp;           "iataCode": "ORD",<br/>
    &emsp;&emsp;&emsp;           "country": "United States",<br/>
    &emsp;&emsp;&emsp;            "city": "Chicago",<br/>
    &emsp;&emsp;        {'}'},<br/>
    &emsp;&emsp;        "flightDistance": {'{'}<br/>
    &emsp;&emsp;&emsp;            "miles": 718,<br/>
    &emsp;&emsp;&emsp;            "km": 1155<br/>
    &emsp;&emsp;&emsp;        {'}'},<br/>
    &emsp;&emsp;        "FlightDuration": {'{'}<br/>
    &emsp;&emsp;&emsp;            "hours": 2,<br/>
    &emsp;&emsp;&emsp;            "minutes": 32<br/>
    &emsp;&emsp;        {'}'},<br/>
    &emsp;&emsp;        "formattedDepTime": {'{'}<br/>
    &emsp;&emsp;&emsp;            "full": "2019-05-10T16:59:00.000-01:00",<br/>
    &emsp;&emsp;&emsp;            "nice": "Fri 10th May 2019",<br/>
    &emsp;&emsp;&emsp;            "time12": "4:59pm",<br/>
    &emsp;&emsp;&emsp;            "time24": "16:59",<br/>
    &emsp;&emsp;&emsp;            "spaceTime": "May 10, 2019 16:59"<br/>
    &emsp;&emsp;        {'}'},<br/>
    &emsp;&emsp;        "formattedArrTime": {'{'}<br/>
    &emsp;&emsp;&emsp;           "full": "2019-05-10T18:31:00.000-01:00",<br/>
    &emsp;&emsp;&emsp;            "nice": "Fri 10th May 2019",<br/>
    &emsp;&emsp;&emsp;            "time12": "6:31pm",<br/>
    &emsp;&emsp;&emsp;            "time24": "18:31",<br/>
    &emsp;&emsp;&emsp;            "spaceTime": "May 10, 2019 18:31"<br/>
    &emsp;&emsp;        {'}'}<br/>
    &emsp;    {'}'}<br/>
    {']'}<br/>

        
        </pre>
    </div>
    </div>
  );
};

export default Api_introduction;
