import React from 'react';

const ResultsTwoLines = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay } = props;
  return (
    <div>two lines
                    <p>{`Departing: ${depairportString} at ${depTimeFormatted}`}</p>
                    <p>{`Arriving: ${arrairportString} at ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsTwoLines;