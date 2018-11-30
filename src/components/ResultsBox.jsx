import React from "react";

const ResultsBox = props => {
  const { results, options } = props;

  return (
    <div className="resultsbox">
      {results.map(result => {
        console.log(result.static.flightNo);
        const nice = result.arr.arrTimeDate.nice;
        let flightNo = options.airlineName
          ? result.airline.airlineName
          : result.airline.iatacode;

        return (
          <div className="resultContainer">
            <img
              src={`/images/airlines/${result.airline.iatacode}.svg`}
              alt=""
              width="75"
              height="75"
            />
            <div className="resultText">
              <p>{`${nice} - ${flightNo} ${result.static.flightNo}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsBox;

// ${result.airline.iatacode}
