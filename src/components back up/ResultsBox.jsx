import ResultsThreeLines from "./ResultsThreeLines";
import ResultsThreeLinesReordered from "./ResultsThreeLinesReordered";
import ResultsTwoLinesReordered from "./ResultsTwoLinesReordered";
import ResultsTwoLines from "./ResultsTwoLines";
import ResultsTable from "./ResultsTable";
import TransitTime from "./TransitTime";
import * as functions from "../controllers/jsfunctions"

import React, { Component } from "react";

class ResultsBox extends Component {
  state = {};


  render() {
    const { results, options, format } = this.props;
    console.log(options);

    const {
      airlineName,
      distanceradio,
      cabinradio,
      duration,
      twelveClock,
      logo,
      transit,
      operatedBy
    } = options;

    return (
      <div className="resultsbox">
        {results.map((result, index) => {
          console.log(result);
          const depDate = new Date(result.data.dep.dateTime.string);
          const arrDate = new Date(result.data.arr.dateTime.string);
          let transitTime;
          if (results[index + 1]) {
            console.log(arrDate);
            console.log(new Date(results[index + 1].data.dep.dateTime.string));
            transitTime = functions.daysBetween(
              arrDate,
              new Date(results[index + 1].data.dep.dateTime.string)
            );
          } else {
            transitTime = null;
          }

          let transitTimeLabel;
          if (transitTime && !transitTime.days && transit) {
            transitTimeLabel =
              "-------- Transit Time: " +
              transitTime.hours +
              "h " +
              transitTime.minutes +
              "m --------";
          } else {
            transitTimeLabel = <hr class="hr"/>;
          }

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
            <div className="results-with-transit" key={depDate.getTime()}>
              <div className="resultContainer" >
                {logo && (
                  <img
                    src={`/images/airlines/${flt.iatacode}.svg`}
                    alt=""
                    // width="75"
                    // height="75"
                  />
                )}

                <div className="resultText">
                  <p className="lineOne">
                    {`${depDateFormatted} - ${
                      !airlineName ? flt.iatacode : flt.name
                    } ${flt.flightNo} `}
                    <span class="operatedBy">
                      {`${operatedBy ? flt.operatedBy.toLowerCase() : ""} `}
                    </span>
                    {`${
                      cabinradio === "cabin"
                        ? "- " + flt.cabin
                        : cabinradio === "className"
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
                    }`}
                  </p>

                  {format === "threelines" && (
                    <ResultsThreeLines
                      depairportString={depairportString}
                      depTimeFormatted={depTimeFormatted}
                      arrairportString={arrairportString}
                      arrTimeFormatted={arrTimeFormatted}
                      nextDay={nextDay}
                      transitTime={transitTimeLabel}
                    />
                  )}
                  {format === "threelinesreordered" && (
                    <ResultsThreeLinesReordered
                      depairportString={depairportString}
                      depTimeFormatted={depTimeFormatted}
                      arrairportString={arrairportString}
                      arrTimeFormatted={arrTimeFormatted}
                      nextDay={nextDay}
                      transitTime={transitTimeLabel}
                    />
                  )}
                  {format === "twolines" && (
                    <ResultsTwoLines
                      depairportString={depairportString}
                      depTimeFormatted={depTimeFormatted}
                      arrairportString={arrairportString}
                      arrTimeFormatted={arrTimeFormatted}
                      nextDay={nextDay}
                      transitTime={transitTimeLabel}
                    />
                  )}
                  {format === "twolinesreordered" && (
                    <ResultsTwoLinesReordered
                      depairportString={depairportString}
                      depTimeFormatted={depTimeFormatted}
                      arrairportString={arrairportString}
                      arrTimeFormatted={arrTimeFormatted}
                      nextDay={nextDay}
                      transitTime={transitTimeLabel}
                    />
                  )}
                  {format === "tableoutput" && (
                    <ResultsTable
                      depairportString={depairportString}
                      depTimeFormatted={depTimeFormatted}
                      arrairportString={arrairportString}
                      arrTimeFormatted={arrTimeFormatted}
                      nextDay={nextDay}
                      transitTime={transitTime}
                      options={options}
                    />
                  )}
                </div>
              </div>
              {transitTimeLabel && <TransitTime transitTime={transitTimeLabel} />}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResultsBox;
