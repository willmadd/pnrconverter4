import React from "react";
import * as functions from "../controllers/jsfunctions";

const ResultsTable = props => {
  const { results, options } = props;

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

  //   let transitTimeLabel;
  //   if (transitTime && !transitTime.days && transit){
  //     transitTimeLabel='Transit Time: '+transitTime.hours+' h '+transitTime.minutes+' m ';
  //   }else{
  // transitTimeLabel=""
  //   }

  return (
    <div className="resultsbox margin-table">
      <table>
        <thead>
          <tr>
            {logo && <th></th>}
            <th>Date</th>
            {airlineName && <th>Airline</th>}

            <th>Flight No</th>
            {operatedBy && <th>Operated By</th>}
            {cabinradio === "cabin" && <th>Cabin</th>}

            <th>Depart</th>
            <th>From</th>
            <th>Arrive</th>
            <th>At</th>
            {duration && <th>Duration</th>}
            {distanceradio !== "off" && <th>Distance</th>}

            {transit && <th>Transit</th>}
          </tr>
        </thead>
        <tbody>
        {results.map((result, index) => {
          const { flt, dep, arr } = result.data;
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

          return (
            
              <tr>
                {logo && (
                  <td>
                    <img src={`/images/airlines/${flt.iatacode}.svg`} alt="" />
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
                  <td>{`${flt.duration.hours}h ${flt.duration.minutes}m`}</td>
                )}
                {distanceradio === "km" ? (
                  <td>{flt.distance.km} KM</td>
                ) : (
                  distanceradio === "miles" && (
                    <td>{flt.distance.miles} Miles</td>
                  )
                )}
                {transit && transitTime && !transitTime.days ? (
                  <td>
                    {transitTime.hours + "h " + transitTime.minutes + "m"}
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
