import React from "react";
import translateFunc from "../translations/TranslateFunction";

const ResultsTwoLines = props => {
  const {
    depairportString,
    depTimeFormatted,
    arrairportString,
    arrTimeFormatted,
    nextDay
  } = props;
  return (
    <div>
      <p>{`${depairportString}, ${translateFunc(
        props.value,
        "flight.to"
      )} ${arrairportString}, ${translateFunc(
        props.value,
        "flight.depart"
      )} ${depTimeFormatted}, ${translateFunc(
        props.value,
        "flight.arrive"
      )} ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsTwoLines;
