import React from 'react';

const ResultsThreeLinesReordered = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay, transitTime } = props;
  return (
    <div>
                    <p>{`Departs: ${depTimeFormatted} from ${depairportString}, Arrives: ${arrairportString} at ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsThreeLinesReordered;