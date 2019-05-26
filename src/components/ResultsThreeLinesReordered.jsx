import React from "react";
import translateFunc from "../translations/TranslateFunction";

const ResultsThreeLinesReordered = props => {
  const {
    depairportString,
    depTimeFormatted,
    arrairportString,
    arrTimeFormatted,
    nextDay
  } = props;
  return (
    
      <p>{`${translateFunc(
        props.value,
        "flight.departing"
      )} ${depTimeFormatted} ${translateFunc(
        props.value,
        "flight.from"
      )} ${depairportString}`}
      <br />
      {`${translateFunc(
        props.value,
        "flight.arriving"
      )} ${arrTimeFormatted}${nextDay} ${translateFunc(
        props.value,
        "flight.into"
      )} ${arrairportString}`}</p>
    
  );
};

export default ResultsThreeLinesReordered;
