import translateFunc from "../translations/TranslateFunction";

import React, { Component } from "react";

class TransitTime extends Component {
  
  transitTimeCalc = (index, results, value, arrDate, transit, transitTime) => {

    let transitTimeLabel;
    let transitAlert;
    if (transitTime && !transitTime.days && transit) {
      if (transitTime.hours >= 4) {
        transitAlert = `${translateFunc(
          value || "en",
          "flight.longconnection"
        )}`;
      } else if (
        transitTime.hours <= 0 ||
        (transitTime.hours === 1 && transitTime.minutes <= 30)
      ) {
        transitAlert = `${translateFunc(
          value || "en",
          "flight.shortconnection"
        )}`;
      } else {
        transitAlert = "";
      }

      transitTimeLabel =
        translateFunc(value || "en", "transit.time") +
        " " +
        transitTime.hours +
        translateFunc(value || "en", "time.hours") +
        " " +
        transitTime.minutes +
        translateFunc(value || "en", "time.minutes");
    } else {
      transitTimeLabel = "";
    }
    return { transitTimeLabel, transitAlert };
  };

  render() {
    let { index, results, value, arrDate, transit, tt, logo } = this.props;
    
      let { transitTimeLabel, transitAlert } = this.transitTimeCalc(
        index,
        results,
        value,
        arrDate,
        transit,
        tt
      );


    return (
      <div className={`transit ${logo?"left-margin-75":"left-margin-10"}`}>
        {transit? (tt && !tt.days) ?  <TransitTimeWarning transitAlert={transitAlert} transitTimeLabel={transitTimeLabel}/>:"------------------------------------------------------------------------------------------":<br/>}
      </div>
    );
  }
}


const TransitTimeWarning = (props) => {
  return (
    <div>
      --------<span className="transitwarning">{props.transitAlert}</span>--{props.transitTimeLabel}--------
    </div>
  );
};




export default TransitTime;
