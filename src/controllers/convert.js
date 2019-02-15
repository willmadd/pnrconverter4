import * as api from "../db/sqlqueries";

export const convertItinerary = (flightInput, options, format) => {
  api.writeQueries(flightInput, options, format);
  //split lines into array
  flightInput = createArray(flightInput);
  //filter out non valid flight lines
  flightInput = filterFlightInput(flightInput);



  flightInput.forEach((line, index) => {
    if (/OPERATED BY\s/.test(line)) {
      if (/OPERATED BY\s/.test(flightInput[index + 1])) {
        flightInput.splice(index + 1, 1);
      }

      flightInput[index - 1] = flightInput[index - 1] + " " + line;
      flightInput.splice(index, 1);
    }
  });

  let newInfo = flightInput.map((flightLine, index) => {
    const depDest = getDepartureDestination(flightLine);
    const arrDest = getArrivalDestination(flightLine);
    const airline = getAirlineData(flightLine, depDest, arrDest);
// console.log([depDest, arrDest])

    return {
      airline
    };
  });

  let promises = [];
  for (let item of newInfo) {
    promises.push(item.airline);
  }

  return Promise.all(promises).then(result => {
    console.log(result);
    return result;
  });
};

const getAirlineData = (flightInfo, depDest, arrDest) => {

  const iatacode = flightInfo.slice(0, 2);
  let opBy;
  let regex = /OPERATED\sBY\s(.*)/;
  if (flightInfo.match(regex)) {
    opBy = "(" + flightInfo.match(regex)[0] + ")";
  } else {
    opBy = "";
  }

  return api
    .queryDatabase(depDest, arrDest, iatacode, flightInfo)
    .then(results => {
      console.log(results);
      results.data.flt.operatedBy = opBy;
      return results;
    }); /////////
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
      (line.length > 20 &&
        getBookingClass(line) !== undefined &&
        getDepartureDate(line) !== undefined && getArrivalDestination(line)!== undefined && getDepartureDate(line) !== undefined && !line.substring(0, 6).includes('HHT') && !line.substring(0, 6).includes('OTH') && !/\/\w+\//.test(line)) ||
      /OPERATED BY\s/.test(line)
    );
  });
  return flightInput;
};

const getDepartureDestination = flightInfo => {
  let regex = /\b[A-Z]{6}\b|\b[A-Z]{3}\s[A-Z]{3}\b/;
  // let departureDest = "";

  if (!flightInfo.match(regex)) {
    let newRegex=/\D\s+\d{2}\D{3}\s+\D{3}\s+\w{1,2}\s\D{3}/;
    if (flightInfo.match(newRegex)){
      let newDest = flightInfo.match(newRegex)[0];
      console.log(newDest.match(/\b\w{3}\b/g)[0]);
      return newDest.match(/\b\D{3}\b/g)[0]
    };
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
    let newRegex=/\D\s+\d{2}\D{3}\s+\D{3}\s+\w{1,2}\s\D{3}/;
    if (flightInfo.match(newRegex)){
      let newDest = flightInfo.match(newRegex)[0];
      // console.log(newDest.match(/\b\D{3}\b/g)[1]);
      return newDest.match(/\b\D{3}\b/g)[1]
    };
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
  if(flightInfo.match(regex)){
    let date = flightInfo.match(regex)[0].trim();
    return date;
  }else{
    return undefined;
  }
};



export const getNames = flightData => {

flightData=createArray(flightData)
let passengers = [];

  flightData.forEach(line => {
    if (/\b\d{1}\.\w{3,}\/\D+[\D]\b/.test(line)){
      line = line.split(/[0-9]\.[0-9]|[0-9]\./).filter(line => line)
      line.forEach(line =>{
        passengers.push(line)
      })
    }
  })
  passengers = passengers.filter(name=>{
    return !/^\s/.test(name)
  })

  return passengers;
};
