import React from 'react';
import translateFunc from "../translations/TranslateFunction";

const ResultsThreeLinesReordered = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay, transitTime } = props;
  return (
    <div>
                    <p>{`${translateFunc(
        props.value,
        "flight.departing"
      )} ${depTimeFormatted} ${translateFunc(
        props.value,
        "flight.from"
      )} ${depairportString}`}</p>
                    <p>{`${translateFunc(
        props.value,
        "flight.arriving"
      )} ${arrTimeFormatted}${nextDay} ${translateFunc(
        props.value,
        "flight.into"
      )} ${arrairportString}`}</p>
    </div>
  );
};

export default ResultsThreeLinesReordered;