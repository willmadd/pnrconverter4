import * as functions from "../controllers/jsfunctions";

import translateFunc from "../translations/TranslateFunction";
import Names from "./Names";
import React, { Component } from "react";

class ResultsTable extends Component {

state={
  tableStyle:{
    fontFamily:"ralewayregular",
  }
}

componentDidMount(){
  this.changeFont();
}
componentDidUpdate(prevProps, prevState){
  if (this.props.options.systemFonts !== prevProps.options.systemFonts)
  this.changeFont();
}



changeFont = () =>{
  const {systemFonts} = this.props.options;
 if(systemFonts){
  const divStyle = {
    fontFamily: "Arial"
  };
   this.setState({
    tableStyle:divStyle
   })
 }else{
  const divStyle = {
    fontFamily:"ralewayregular",
  };
   this.setState({
    tableStyle:divStyle
   })
 }
}

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
    const { results, options, value, names } = this.props;

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

let {tableStyle} = this.state;

    return (
      <div>
        <div
          className="selectbutton resultsbox"
          onDoubleClick={() => this.selectText("restable")}
        >
          {translateFunc(value, "message.doubleclick")}
        </div>

        <div className="resultsbox margin-table shadow no-margin">
        <div id="restable" style={tableStyle}>
        {names[0] && <Names names={names}/>}
          <table>
            <thead>
              <tr>
                {logo && <th />}
                <th>{`${translateFunc(value, "table.date")}`}</th>
                {airlineName && (
                  <th>{`${translateFunc(value, "table.airline")}`}</th>
                )}

                <th>{`${translateFunc(value, "table.flight-no")}`}</th>
                {operatedBy && (
                  <th>{`${translateFunc(value, "table.operated-by")}`}</th>
                )}
                {cabinradio === "cabin" && (
                  <th>{`${translateFunc(value, "nav.cabin")}`}</th>
                )}

                <th>{`${translateFunc(value, "flight.depart")}`}</th>
                <th>{`${translateFunc(value, "flight.from")}`}</th>
                <th>{`${translateFunc(value, "flight.arrive")}`}</th>
                <th>{`${translateFunc(value, "flight.at")}`}</th>
                {duration && (
                  <th>{`${translateFunc(value, "table.duration")}`}</th>
                )}
                {distanceradio !== "off" && (
                  <th>{`${translateFunc(value, "table.distance")}`}</th>
                )}

                {transit && (
                  <th>{`${translateFunc(value, "table.transit")}`}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => {
                const { flt, dep, arr } = result.data;
                const depDate = new Date(result.data.dep.dateTime.string);
                const arrDate = new Date(result.data.arr.dateTime.string);

                const languageCode = translateFunc(
                  value || "en",
                  "language.code"
                );

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

                let depairportString;
                if (dep.airportname.split(" ")[0] === dep.cityname) {
                  depairportString =
                    dep.airportname + " (" + dep.airportcode + ")";
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
                  arrairportString =
                    arr.airportname + " (" + arr.airportcode + ")";
                } else {
                  arrairportString =
                    arr.airportname +
                    ", " +
                    arr.cityname +
                    " (" +
                    arr.airportcode +
                    ")";
                }

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

                let transitTime;
                if (results[index + 1]) {
                  transitTime = functions.daysBetween(
                    arrDate,
                    new Date(results[index + 1].data.dep.dateTime.string)
                  );
                } else {
                  transitTime = null;
                }

                return (
                  <tr key={`${arrairportString}${arrTimeFormatted}`}>
                    {logo && (
                      <td>
                        <img
                          src={`/images/airlines/${flt.iatacode.toLowerCase()}.svg`}
                          alt=""
                        />
                      </td>
                    )}
                    <td>{depDateFormatted}</td>

                    {airlineName && <td>{flt.name}</td>}

                    <td>
                      {!airlineName && flt.iatacode}
                      {flt.flightNo} {cabinradio === "className" && flt.class}
                    </td>

                    {operatedBy && <td  className="operated-by">{flt.operatedBy.toLowerCase()}</td>}
                    {cabinradio === "cabin" && <td>{flt.cabin}</td>}
                    <td>{depTimeFormatted}</td>
                    <td>{depairportString}</td>
                    <td>
                      {arrTimeFormatted} {nextDay}
                    </td>
                    <td>{arrairportString}</td>
                    {duration && (
                      <td>{`${flt.duration.hours}${translateFunc(
                        value,
                        "time.hours"
                      )} ${flt.duration.minutes}${translateFunc(
                        value,
                        "time.minutes"
                      )}`}</td>
                    )}
                    {distanceradio === "km" ? (
                      <td>{`${flt.distance.km} ${translateFunc(
                        value,
                        "distance.km"
                      )}`}</td>
                    ) : (
                      distanceradio === "miles" && (
                        <td>{`${flt.distance.miles} ${translateFunc(
                          value,
                          "distance.miles"
                        )}`}</td>
                      )
                    )}
                    {transit && transitTime && !transitTime.days ? (
                      <td>
                        {`${transitTime.hours}${translateFunc(
                          value,
                          "time.hours"
                        )} ${transitTime.minutes}${translateFunc(
                          value,
                          "time.minutes"
                        )}`}
                      </td>
                    ) : (
                      <td>-</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsTable;
