import React from 'react';

const ResultsThreeLinesReordered = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay } = props;
  return (
    <div>
      threelines reordered
                    <p>{`Departing: ${depairportString} at ${depTimeFormatted}`}</p>
                    <p>{`Arriving: ${arrairportString} at ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsThreeLinesReordered;