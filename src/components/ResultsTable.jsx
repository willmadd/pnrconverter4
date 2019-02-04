import React from "react";
import * as functions from "../controllers/jsfunctions";

import translateFunc from "../translations/TranslateFunction";

const ResultsTable = props => {
  const { results, options, value } = props;
  console.log(`${value}------`)

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
    <div className="resultsbox margin-table shadow">
      <table>
        <thead>
          <tr>
            {logo && <th />}
            <th>{`${translateFunc(value, "table.date")}`}</th>
            {airlineName && <th>{`${translateFunc(value, "table.airline")}`}</th>}

            <th>{`${translateFunc(value, "table.flight-no")}`}</th>
            {operatedBy && (
              <th>{`${translateFunc(value, "table.operated-by")}`}</th>
            )}
            {cabinradio === "cabin" && <th>{`${translateFunc(value, "nav.cabin")}`}</th>}

            <th>{`${translateFunc(value, "flight.depart")}`}</th>
            <th>{`${translateFunc(value, "flight.from")}`}</th>
            <th>{`${translateFunc(value, "flight.arrive")}`}</th>
            <th>{`${translateFunc(value, "flight.at")}`}</th>
            {duration && <th>{`${translateFunc(value, "table.duration")}`}</th>}
            {distanceradio !== "off" && <th>{`${translateFunc(value, "table.distance")}`}</th>}

            {transit && <th>{`${translateFunc(value, "table.transit")}`}</th>}
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const { flt, dep, arr } = result.data;
            const depDate = new Date(result.data.dep.dateTime.string);
            const arrDate = new Date(result.data.arr.dateTime.string);


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
              console.log(arrDate);
              console.log(
                new Date(results[index + 1].data.dep.dateTime.string)
              );
              transitTime = functions.daysBetween(
                arrDate,
                new Date(results[index + 1].data.dep.dateTime.string)
              );
            } else {
              transitTime = null;
            }

            return (
              <tr>
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

                {operatedBy && <td>{flt.operatedBy.toLowerCase()}</td>}
                {cabinradio === "cabin" && <td>{flt.cabin}</td>}
                <td>{depTimeFormatted}</td>
                <td>{depairportString}</td>
                <td>
                  {arrTimeFormatted} {nextDay}
                </td>
                <td>{arrairportString}</td>
                {duration && (
                  <td>{`${flt.duration.hours}${translateFunc(value, 'time.hours')} ${flt.duration.minutes}${translateFunc(value, 'time.minutes')}`}</td>
                )}
                {distanceradio === "km" ? (
                  <td>{`${flt.distance.km} ${translateFunc(value, 'distance.km')}`}</td>
                ) : (
                  distanceradio === "miles" && (
                    <td>{`${flt.distance.miles} ${translateFunc(value, 'distance.miles')}`}</td>
                  )
                )}
                {transit && transitTime && !transitTime.days ? (
                  <td>{`${transitTime.hours}${translateFunc(value, 'time.hours')} ${transitTime.minutes}${translateFunc(value, 'time.minutes')}`}

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
  );
};

export default ResultsTable;
