import React from 'react';

const ResultsThreeLinesReordered = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay, transitTime } = props;
  return (
    <div>
                    <p>{`Departing: ${depTimeFormatted} from ${depairportString}`}</p>
                    <p>{`Arriving: ${arrTimeFormatted}${nextDay} into ${arrairportString}`}</p>
    </div>
  );
};

export default ResultsThreeLinesReordered;