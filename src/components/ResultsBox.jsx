import ResultsThreeLines from "./ResultsThreeLines";
import ResultsThreeLinesReordered from "./ResultsThreeLinesReordered";
import ResultsTwoLinesReordered from "./ResultsTwoLinesReordered";
import ResultsTwoLines from "./ResultsTwoLines";
import ResultsTable from "./ResultsTable";
import TransitTime from "./TransitTime";
import * as functions from "../controllers/jsfunctions";
import translateFunc from '../translations/TranslateFunction'

import React, { Component } from "react";

class ResultsBox extends Component {
  state = {};


  render() {
    const { results, options, format, value} = this.props;

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
      <div className="resultsbox shadow">
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
          let transitAlert;
          if (transitTime && !transitTime.days && transit) {
            
            if(transitTime.hours >= 4){
              transitAlert = "long-transit"
            }else if(transitTime.hours <= 0 ||(transitTime.hours === 1 && transitTime.minutes <= 30)){
              console.log(transitTime.hours)
              console.log(transitTime.minutes)
              transitAlert = "short-transit"
            }
          
            transitTimeLabel =
              "-------- "+translateFunc(value||'en', 'transit.time')+" " +
              transitTime.hours +
              translateFunc(value||'en', 'time.hours')+" " +
              transitTime.minutes +
              translateFunc(value||'en', 'time.minutes')+" --------";
          } else {
            transitTimeLabel = <hr className="hr"/>;
          }

          const languageCode = translateFunc(value||'en', 'language.code')

          const dateFormat = translateFunc(value||'en', 'date.format')

          const depDateFormatted = depDate.toLocaleString(languageCode, {
            weekday: dateFormat,
            day: "numeric",
            month: "short"
          });
          const depTimeFormatted = depDate.toLocaleString(languageCode, {
            hour: "numeric",
            minute: "2-digit",
            hour12: twelveClock
          });

          const arrTimeFormatted = arrDate.toLocaleString(languageCode, {
            hour: "numeric",
            minute: "2-digit",
            hour12: twelveClock
          });

          const arrDateFormatted = arrDate.toLocaleString(languageCode, {
            day: "numeric",
            month: "short"
          });

          let nextDay = "";

          if (
            arrDateFormatted !==
            depDate.toLocaleString(languageCode, {
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
            <div className={`results-with-transit ${transitAlert}`} key={depDate.getTime()}>
              <div className={`resultContainer `} >
                {logo && (
                  <img
                    src={`/images/airlines/${flt.iatacode.toLowerCase()}.svg`}
                    alt="airline logo"
                  />
                )}

                <div className="resultText">
                  <p className="lineOne">
                    {`${depDateFormatted} - ${
                      !airlineName ? flt.iatacode : flt.name
                    } ${flt.flightNo} `}
                    <span className="operatedBy">
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
                          flt.duration.hours + translateFunc(value, 'time.hours')+" "+
                          flt.duration.minutes +
                          translateFunc(value, 'time.minutes')+" "
                        : ""
                    }${
                      distanceradio === "miles"
                        ? "- " + flt.distance.miles + " "+ translateFunc(value, 'distance.miles')
                        : distanceradio === "km"
                        ? "- " + flt.distance.km + " "+ translateFunc(value, 'distance.km')
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
                      value={value}
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
                      value={value}
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
                      value={value}
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
                      value={value}
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
                      value={value}
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
