const firebase = require("firebase");
// const cors = require("cors")({ origin: true });

const { config } = require('./config')

firebase.initializeApp(config);

let database = firebase.database();

exports.getAirline = (iatacode) => {
  console.log('airline database queried')
  return database
    .ref("/airlines")
    .orderByChild('iatacode').equalTo(iatacode)
    .once("value")
    .then(data=>data.val());
};


exports.getAirport = (airportCode) => {
  console.log('airport database queried')
  return database
    .ref("/airports")
    .orderByChild('airportcode').equalTo(airportCode)
    .once("value")
    .then(data=>data.val());
};