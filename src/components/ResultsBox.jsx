import React from "react";
import ResultsThreeLines from "./ResultsThreeLines";
import ResultsThreeLinesReordered from "./ResultsThreeLinesReordered";
import ResultsTwoLinesReordered from "./ResultsTwoLinesReordered";
import ResultsTwoLines from "./ResultsTwoLines";

const ResultsBox = props => {
  const { results, options, format } = props;
  console.log(options);

  const {
    airlineName,
    distanceradio,
    cabinradio,
    duration,
    twelveClock,
    logo
  } = options;

  return (
    <div className="resultsbox">
      {results.map(result => {
        console.log(result);
        const depDate = new Date(result.data.dep.dateTime.string);
        const arrDate = new Date(result.data.arr.dateTime.string);
        const depDateFormatted = depDate.toLocaleString("en-gb", {
          weekday: "short",
          day: "numeric",
          month: "short"
        });
        const depTimeFormatted = depDate.toLocaleString("en-gb", {
          hour: "numeric",
          minute: "2-digit",
          hour12: twelveClock
        });

        const arrTimeFormatted = arrDate.toLocaleString("en-gb", {
          hour: "numeric",
          minute: "2-digit",
          hour12: twelveClock
        });

        const arrDateFormatted = arrDate.toLocaleString("en-gb", {
          day: "numeric",
          month: "short"
        });

        let nextDay = "";

        if (
          arrDateFormatted !==
          depDate.toLocaleString("en-gb", {
            day: "numeric",
            month: "short"
          })
        ) {
          nextDay = " (on the " + arrDateFormatted + ")";
        }

        const { flt, dep, arr } = result.data;
        let depairportString;
        if (dep.airportname.split(" ")[0] === dep.cityname) {
          depairportString = dep.airportname + " (" + dep.airportcode + ")";
        } else {
          depairportString =
            dep.airportname +
            ", " +
            dep.cityname +
            " (" +
            dep.airportcode +
            ")";
        }

        let arrairportString;
        if (arr.airportname.split(" ")[0] === arr.cityname) {
          arrairportString = arr.airportname + " (" + arr.airportcode + ")";
        } else {
          arrairportString =
            arr.airportname +
            ", " +
            arr.cityname +
            " (" +
            arr.airportcode +
            ")";
        }

        console.log(format);
        return (
          <div className="resultContainer" key={depDate.getTime()}>
            {logo && (
              <img
                src={`/images/airlines/${flt.iatacode}.svg`}
                alt=""
                width="75"
                height="75"
              />
            )}

            <div className="resultText">
              <p>{`${depDateFormatted} - ${
                !airlineName ? flt.iatacode : flt.name
              } ${flt.flightNo} ${
                cabinradio === "className"
                  ? "- " + flt.cabin
                  : cabinradio === "cabin"
                  ? flt.class
                  : ""
              }${
                duration
                  ? " - " +
                    flt.duration.hours +
                    "h " +
                    flt.duration.minutes +
                    "m "
                  : ""
              }${
                distanceradio === "miles"
                  ? "- " + flt.distance.miles + " Miles"
                  : distanceradio === "km"
                  ? "- " + flt.distance.km + " KM"
                  : ""
              }`}</p>

              {format === "threelines" && (
                <ResultsThreeLines
                  depairportString={depairportString}
                  depTimeFormatted={depTimeFormatted}
                  arrairportString={arrairportString}
                  arrTimeFormatted={arrTimeFormatted}
                  nextDay={nextDay}
                />
              )}
              {format === "threelinesreordered" && (
                <ResultsThreeLinesReordered
                  depairportString={depairportString}
                  depTimeFormatted={depTimeFormatted}
                  arrairportString={arrairportString}
                  arrTimeFormatted={arrTimeFormatted}
                  nextDay={nextDay}
                />
              )}
              {format === "twolines" && (
                <ResultsTwoLines
                  depairportString={depairportString}
                  depTimeFormatted={depTimeFormatted}
                  arrairportString={arrairportString}
                  arrTimeFormatted={arrTimeFormatted}
                  nextDay={nextDay}
                />
              )}
              {format === "twolinesreordered" && (
                <ResultsTwoLinesReordered
                  depairportString={depairportString}
                  depTimeFormatted={depTimeFormatted}
                  arrairportString={arrairportString}
                  arrTimeFormatted={arrTimeFormatted}
                  nextDay={nextDay}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsBox;

// ${result.airline.iatacode}
