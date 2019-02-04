import React from "react";
import translateFunc from "../translations/TranslateFunction";

const ResultsThreeLinesReordered = props => {
  const {
    depairportString,
    depTimeFormatted,
    arrairportString,
    arrTimeFormatted,
    nextDay,
    transitTime
  } = props;
  return (
    <div>
      <p>{`${translateFunc(
        props.value,
        "flight.departs"
      )} ${depTimeFormatted} ${translateFunc(
        props.value,
        "flight.from"
      )} ${depairportString}, ${translateFunc(
        props.value,
        "flight.arrives"
      )} ${arrairportString} ${translateFunc(
        props.value,
        "flight.at"
      )} ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsThreeLinesReordered;
