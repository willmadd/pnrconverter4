import React from 'react';

const ResultsThreeLines = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay } = props;
  return (
    <div>
                    <p>{`Departing: ${depairportString} at ${depTimeFormatted}`}</p>
                    <p>{`Arriving: ${arrairportString} at ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsThreeLines;