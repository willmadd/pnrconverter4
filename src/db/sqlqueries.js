const axios = require("axios");

exports.fullPNRQuery = (PNR)=>{
let params = new URLSearchParams();
params.append('pnr', PNR);
return axios.post('http://localhost:8000/api/convert', params) 
}


exports.queryDatabase = (depAirportCode, arrAirportCode, iatacode, flightLine) => {
  let params = new URLSearchParams();
  params.append('depAirportCode', depAirportCode);
  params.append('arrAirportCode', arrAirportCode);
  params.append('iatacode', iatacode);
  params.append('flightLine', flightLine);
// console.log(depAirportCode);
// console.log(arrAirportCode);
// console.log(iatacode);
// console.log(flightLine);

  return axios.post('https://www.pnrconverter.com/airport-api.php', params) 
  // return axios.post('http://localhost:8888/pnrconverter/airport-api.php', params) 
};



exports.getBlogArticles = () => {
  return axios.get('https://www.pnrconverter.com/blog-api.php'); 
};

exports.getBlogArticle = (slug) => {
  let params = new URLSearchParams();
  params.append('slug', slug);
  return axios.post('https://www.pnrconverter.com/blogpost-api.php', params);
};


exports.writeQueries=(flight, options, format)=>{
  let params = new URLSearchParams();
  params.append('input', flight);
  params.append('options', JSON.stringify(options));
  params.append('format', JSON.stringify(format));
  
  // return axios.post('https://www.pnrconverter.com/write-file.php', params);
  return axios.post('http://localhost:8000/api/write-file', params)
}