const axios = require("axios");


exports.queryDatabase = (depAirportCode, arrAirportCode, iatacode, flightLine) => {
  let params = new URLSearchParams();
  params.append('depAirportCode', depAirportCode);
  params.append('arrAirportCode', arrAirportCode);
  params.append('iatacode', iatacode);
  params.append('flightLine', flightLine);

console.log('sql queries file hit')

  return axios.post('https://www.pnrconverter.com/airport-api.php', params); 
};

