const axios = require("axios");


exports.queryDatabase = (depAirportCode, arrAirportCode, iatacode, flightLine) => {
  let params = new URLSearchParams();
  params.append('depAirportCode', depAirportCode);
  params.append('arrAirportCode', arrAirportCode);
  params.append('iatacode', iatacode);
  params.append('flightLine', flightLine);

  return axios.post('http://localhost:8888/pnrconverter/airport-api.php', params); 
};


exports.getAdvert = () => {
  return axios.post('http://localhost:8888/pnrconverter/asense.php')
}