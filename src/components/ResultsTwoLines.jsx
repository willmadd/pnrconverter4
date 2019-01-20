import React from 'react';

const ResultsTwoLines = (props) => {
  const {depairportString, depTimeFormatted, arrairportString,arrTimeFormatted, nextDay} = props;
  return (
    <div>
                    <p>{`${depairportString}, to ${arrairportString}, Depart ${depTimeFormatted}, Arrive ${arrTimeFormatted}${nextDay}`}</p>
    </div>
  );
};

export default ResultsTwoLines;