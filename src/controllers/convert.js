import * as api from "../db/models";
const spacetime = require("spacetime");
// import spacetime from '/spa'

export const convertItinerary = (flightInput, options) => {
  //split lines into array
  flightInput = createArray(flightInput);
  //filter out non valid flight lines
  flightInput = filterFlightInput(flightInput);
  //create object

  let depTimeDate;
  let arrTimeDate;
  let flightNo;

  let newInfo = flightInput.map((flightLine, index) => {
    const depDest = getDepartureDestination(flightLine);
    const arrDest = getArrivalDestination(flightLine);
    const airline = getAirlineData(flightLine);
    let depAirport = getAirportData(depDest);
    let arrAirport = getAirportData(arrDest);

    let depDate = getDepartureDate(flightLine)
    let arrDate = getArrivalDate(flightLine)
    let depTime = getDepartureTime(flightLine)
    let arrTime = getArrivalTime(flightLine)
    // i'm here need to sort out the format for getnew flight duration
    let flightDuration = newGetFlightDuration = (
      departureString,
      departureTimeZone,
      arrivalString,
      arrivalTimeZone)

 depTimeDate = formatDate(depDate, depTime, flightLine)
arrTimeDate = formatDate(arrDate, arrTime, flightLine)

let staticInfo = {
  flightNo:getFlightNo(flightLine),
  depTimeDate,
  arrTimeDate
}
    
    return { airline, depAirport, arrAirport, staticInfo };
  });

  let promises = [];
  for (let item of newInfo) {
    promises.push(item.airline);
    promises.push(item.depAirport);
    promises.push(item.arrAirport);
    promises.push(item.staticInfo);
  }

  return Promise.all(promises).then(result => {
    console.log(result);
    let outputArray = [];
    for (let i = 0 ; i<result.length ; i +=4){
      let flightLineObject = {
        airline:result[i],
        dep:{
          airport: result[i+1],
          depTimeDate
        },
        arr:{
          airport: result[i+2],
          arrTimeDate
        },
        static: result[i+3]
      }
      outputArray.push(flightLineObject);
    }


    console.log(outputArray);
    
    return outputArray
  });
};

const getFlightNo = flightInfo => {
  let regex = /\d+/g;
  return Number(flightInfo.slice(2).match(regex)[0]).toString();
};

const getAirportData = airportCode => {
  let localAirportData = localStorage["airportData"];
  if (localAirportData) {
    let localStorageObject = JSON.parse(localStorage.airportData);
    if (localStorageObject[airportCode]) {
      return localStorageObject[airportCode];
    } else {
      return api.getAirport(airportCode).then(res=>{
        const airportObject = Object.values(res)[0];
        let updatedLocalStorage = {
          ...localStorageObject,
          [airportCode]: airportObject
        };
        localStorage["airportData"] = JSON.stringify(updatedLocalStorage);
        return airportObject;
      })
    }
  } else {
    console.log("no airport local storage detected");
    let newAirportObject = {};
    return api.getAirport(airportCode).then(res => {
      const airportObject = Object.values(res)[0];
      console.log(airportObject);
      newAirportObject[airportCode] = airportObject;
      localStorage["airportData"] = JSON.stringify(newAirportObject);
      return newAirportObject;
    });
  }

  
};

//this function checks the existance of the airlin data in the local storage - if it's not here then it queries the databsae and writes to lcoal storage
const getAirlineData = flightInfo => {
  const starttime = new Date().getTime();
  const bookingClass = getBookingClass(flightInfo).toLowerCase();
  const iatacode = flightInfo.slice(0, 2);

  let localAirlineData = localStorage["airlineData"];

  if (localAirlineData) {
    let localStorageObject = JSON.parse(localStorage.airlineData);
    if (localStorageObject[iatacode]) {
      console.log(`${iatacode} found in local storage`);
      const result = localStorageObject[iatacode];
      const endtime = new Date().getTime();
      console.log(endtime - starttime);
      return formatAirlineData(result, bookingClass);
    } else {
      console.log(`${iatacode} not found in local storage - query database`);
      return api.getAirline(iatacode).then(res => {
        const airlineObject = Object.values(res)[0];
        let updatedLocalStorage = {
          ...localStorageObject,
          [iatacode]: airlineObject
        };
        localStorage["airlineData"] = JSON.stringify(updatedLocalStorage);
        const endtime = new Date().getTime();
        console.log(endtime - starttime);
        return formatAirlineData(airlineObject, bookingClass);
      });
    }
  } else {
    console.log("no airline local storage detected");
    let newAirlineObject = {};
    return api.getAirline(iatacode).then(res => {
      const airlineObject = Object.values(res)[0];
      newAirlineObject[iatacode] = airlineObject;
      localStorage["airlineData"] = JSON.stringify(newAirlineObject);
      const endtime = new Date().getTime();
      console.log(endtime - starttime);
      return formatAirlineData(airlineObject, bookingClass);
    });
  }
};

const formatAirlineData = (airlineObject, bookingClass) => {
  return {
    airlineName: airlineObject.airlinename,
    iatacode: airlineObject.iatacode,
    bookingClass,
    cabin: airlineObject[bookingClass]
  };
};

const getBookingClass = flightInfo => {
  let regex = /\d[A-Z]\s|\s[A-Z]\s/;
  let result = flightInfo.match(regex);
  if (!result) {
    return undefined;
  }

  return result[0].replace(/[0-9]+/, "").trim();
};

const createArray = flightInput => {
  return flightInput
    .trim()
    .toUpperCase()
    .split("\n");
};

const filterFlightInput = flightInput => {
  flightInput = flightInput.map(line => {
    line = line.substring(0, 10).replace(/[*#:]/, " ") + line.substring(10);
    return line
      .replace(".", "")
      .trim()
      .replace(/^[0-9]+\s/, "")
      .trim()
      .replace(/\s{2,}/g, " ")
      .trim();
  });
  flightInput = flightInput.filter(line => {
    return (
      line.length > 20 &&
      getBookingClass(line) !== undefined &&
      getDepartureDate(line) !== undefined
      // || /OPERATED BY\s/.test(line)
    );
  });
  return flightInput;
};

const getDepartureDestination = flightInfo => {
  let regex = /\b[A-Z]{6}\b|\b[A-Z]{3}\s[A-Z]{3}\b/;
  // let departureDest = "";

  if (!flightInfo.match(regex)) {
    return null;
  }
  let departureDest = flightInfo.match(regex)[0];

  if (departureDest.length === 6) {
    return departureDest.slice(0, 3);
  }

  return flightInfo.match(regex)[0].split(" ")[0];
};

const getArrivalDestination = flightInfo => {
  let regex = /\b[A-Z]{6}\b|\b[A-Z]{3}\s[A-Z]{3}\b/;
  if (!flightInfo.match(regex)) {
    return null;
  }

  let departureDest = flightInfo.match(regex)[0];

  if (departureDest.length === 6) {
    return departureDest.slice(3);
  }

  return flightInfo.match(regex)[0].split(" ")[1];
};



const getDepartureDate = flightInfo => {
  if (flightInfo === undefined) {
    return;
  }
  let regex = /[0-9]+((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEP)|(OCT)|(NOV)|(DEC))/;
  let date = flightInfo.match(regex)[0].trim();
  // console.log(date);
  return date;
};

const getArrivalDate = flightInfo => {
  let regex = /[0-9]+((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEP)|(OCT)|(NOV)|(DEC))/g;
  if (flightInfo.match(regex).length === 2) {
    return flightInfo.match(regex)[1].trim();
  } else if (flightInfo.match(regex).length === 1)
    return flightInfo.match(regex)[0].trim();
};

const getDepartureTime = flightInfo => {
  if (flightInfo === undefined) {
    return;
  }

  let regex = /[0-9]{3,4}(A|P|N)|(\b[0-9]{4}\b)|(\b[0-9]{2}:[0-9]{2}\b)/g;
  let usFormattedTimes = flightInfo.slice(10).match(regex);

  if (
    !/[APN]/.test(
      flightInfo
        .slice(10)
        .match(regex)
        .join("")
    )
  ) {
    return flightInfo.slice(10).match(regex)[0];
  }

  let forTime = usFormattedTimes.map(time => {
    return (
      time.slice(0, -3) +
      ":" +
      time
        .slice(-3)
        .replace("P", "pm")
        .replace("A", "am")
    );
  });

  return forTime[0];
};

const getArrivalTime = flightInfo => {
  if (flightInfo === undefined) {
    return;
  }
  let regex = /[0-9]{3,4}(A|P|N)|(\b[0-9]{4}\b)|(\b[0-9]{2}:[0-9]{2}\b)/g;
  let usFormattedTimes = flightInfo.slice(10).match(regex);

  if (
    !/[APN]/.test(
      flightInfo
        .slice(10)
        .match(regex)
        .join("")
    )
  ) {
    return flightInfo.slice(10).match(regex)[1];
  }

  let forTime = usFormattedTimes.map(time => {
    return (
      time.slice(0, -3) +
      ":" +
      time
        .slice(-3)
        .replace("P", "pm")
        .replace("A", "am")
    );
  });

  return forTime[1];
};

const formatDate = (date, time, flightLine) => {
  if (!time) {
    return;
  }

  let formattedDate;
  let s;

  if (time.length === 4) {
    formattedDate =
    date.slice(2) +
    " " +
    date.slice(0, 2) +
    ", " +
    new Date().getFullYear().toString() +
    " " +
    time.slice(0, 2) +
    ":" +
    time.slice(2) +
    ":00";
    formattedDate = formattedDate.replace("SEP", "SEPT");
    s = spacetime(formattedDate);
  } else {
    formattedDate =
    date.slice(2) +
    " " +
    date.slice(0, 2) +
    ", " +
    new Date().getFullYear().toString();
    
    formattedDate = formattedDate.replace("SEP", "SEPT");
    s = spacetime(formattedDate);
    s.time(time);
  }
  
  let now = spacetime(new Date());
  
  if (s.isBefore(now)) {
    s.add(1, "year");
  }
  
  if (
    /\#[0-9]{4}\s/.test(flightLine) | /[0-9]{3,4}(A|N|P)\+1/.test(flightLine) | /[0-9]{3,4}(A|N|P)\#1/.test(flightLine) | /#[0-9]{3,4}/.test(flightLine)
    ) {
      s.add(1, "day");
    } else if (
      /\*[0-9]{4}\s/.test(flightLine) | /[0-9]{3,4}(A|N|P)\+2/.test(flightLine)| /\*[0-9]{3,4}/.test(flightLine)
      ) {
        s.add(2, "day");
      } else if (
        /\-[0-9]{4}\s/.test(flightLine) | /[0-9]{3,4}(A|N|P)\-1/.test(flightLine)
        ) {
          s.subtract(1, "day");
        }
        
        let newFDate = s.format("iso");
        let newNiceDate =
        s.format("day-short") +
        " " +
        s.format("date-ordinal") +
        " " +
        s.format("month-short");
        let twelveHoursTime = s.format("time-12h");
        let twentyFourHoursTime = s.format("time-h24");
        if (twentyFourHoursTime.length === 4){
          twentyFourHoursTime = "0"+twentyFourHoursTime
        }
        let spaceTime =
        s.format("month-short") +
    " " +
    s.format("date") +
    ", " +
    s.format("year") +
    " " +
    s.format("time-h24");
    let china=s.format("Y")+"年"+s.format("m")+"月"+s.format("d")+"日";
  return {
    full: newFDate,
    nice: newNiceDate,
    time12: twelveHoursTime,
    time24: twentyFourHoursTime,
    spaceTime: spaceTime,
    china
  };
};



const newGetFlightDuration = (
  departureString,
  departureTimeZone,
  arrivalString,
  arrivalTimeZone
) => {
  let d = spacetime(departureString.spaceTime, departureTimeZone);
  let e = spacetime(arrivalString.spaceTime, arrivalTimeZone);
  e.add(1, "second");
  return { hours: e.since(d).diff.hours, minutes: e.since(d).diff.minutes };
};