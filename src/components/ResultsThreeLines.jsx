import React from 'react';
import translateFunc from "../translations/TranslateFunction";

const ResultsThreeLines = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay, transitTime} = props;
  
  return (
    <div>
                    <p>{`${translateFunc(
        props.value,
        "flight.departing"
      )} ${depairportString} ${translateFunc(
        props.value,
        "flight.at"
      )} ${depTimeFormatted}`}</p><br/>
                    <p>{`${translateFunc(
        props.value,
        "flight.arriving"
      )} ${arrairportString} ${translateFunc(
        props.value,
        "flight.at"
      )} ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsThreeLines;