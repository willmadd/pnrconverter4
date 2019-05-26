import ResultsThreeLines from "./ResultsThreeLines";
import ResultsThreeLinesReordered from "./ResultsThreeLinesReordered";
import ResultsTwoLinesReordered from "./ResultsTwoLinesReordered";
import ResultsTwoLines from "./ResultsTwoLines";
import ResultsTable from "./ResultsTable";
import TransitTime from "./TransitTime";
import * as functions from "../controllers/jsfunctions";
import translateFunc from "../translations/TranslateFunction";

import React, { Component } from "react";
import Names from "./Names";

class ResultsBox extends Component {
  state = {};

  selectText = containerid => {
    let range;
    if (document.selection) {
      // IE
      range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
    } else if (window.getSelection) {
      range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  render() {
    const { results, options, format, value, names } = this.props;

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
      <div>
        <div
          className="selectbutton resultsbox"
          onDoubleClick={() => this.selectText("selectable")}
        >
          {" "}
          {translateFunc(value, "message.doubleclick")}
        </div>
        <div className=" shadow resultsbox" id="selectable">
          {names[0] && <Names names={names} />}

          {results.map((result, index) => {
            const depDate = new Date(result.data.dep.dateTime.string);
            const arrDate = new Date(result.data.arr.dateTime.string);
            let transitTime;
            if (results[index + 1]) {
              transitTime = functions.daysBetween(
                arrDate,
                new Date(results[index + 1].data.dep.dateTime.string)
              );
            } else {
              transitTime = null;
            }


            const languageCode = translateFunc(value || "en", "language.code");

            const dateFormat = translateFunc(value || "en", "date.format");

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
              nextDay =
                " (" +
                translateFunc(value, "flight.on-the") +
                " " +
                arrDateFormatted +
                ")";
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

            return (
              <div class="row">
                <div class="main-content">
                  {logo && (
                    <div className="image-container">
                      <img src={`/images/airlines/png/150/${flt.iatacode.toLowerCase()}.png`} alt="airline logo" 
                      width="75" />
                    </div>
                  )}

                  <div className="result-text">
                  <p className="lineOne">{`${depDateFormatted} - ${
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
                            flt.duration.hours +
                            translateFunc(value, "time.hours") +
                            " " +
                            flt.duration.minutes +
                            translateFunc(value, "time.minutes") +
                            " "
                          : ""
                      }${
                        distanceradio === "miles"
                          ? "- " +
                            flt.distance.miles +
                            " " +
                            translateFunc(value, "distance.miles")
                          : distanceradio === "km"
                          ? "- " +
                            flt.distance.km +
                            " " +
                            translateFunc(value, "distance.km")
                          : ""
                      }`}</p>
                      {format === "threelines" && (
                        <ResultsThreeLines
                          depairportString={depairportString}
                          depTimeFormatted={depTimeFormatted}
                          arrairportString={arrairportString}
                          arrTimeFormatted={arrTimeFormatted}
                          nextDay={nextDay}
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
                                          <TransitTime
                      tt={transitTime}
                      index={index}
                      results={results}
                      value={value}
                      arrDate={arrDate}
                      transit={transit}
                      logo={logo}
                    />
                  </div>
                </div>
                    {/* <TransitTime
                      tt={transitTime}
                      index={index}
                      results={results}
                      value={value}
                      arrDate={arrDate}
                      transit={transit}
                      logo={logo}
                    /> */}
                  
              </div>
            );
          })}

          
        </div>
      </div>
    );
  }
}

export default ResultsBox;
