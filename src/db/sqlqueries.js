const axios = require("axios");


exports.queryDatabase = (depAirportCode, arrAirportCode, iatacode, flightLine) => {
  let params = new URLSearchParams();
  params.append('depAirportCode', depAirportCode);
  params.append('arrAirportCode', arrAirportCode);
  params.append('iatacode', iatacode);
  params.append('flightLine', flightLine);


  return axios.post('https://www.pnrconverter.com/airport-api.php', params) 
  // return axios.post('http://localhost:8888/pnrconverter/airport-api.php', params) 
};



exports.getBlogArticles = () => {
  return axios.get('https://www.pnrconverter.com/blog-api.php'); 
};

exports.getBlogArticle = (slug) => {
  let params = new URLSearchParams();
  params.append('slug', slug);
 console.log(slug);
  return axios.post('https://www.pnrconverter.com/blogpost-api.php', params);
};


exports.writeQueries=(flight, options, format)=>{
  let params = new URLSearchParams();
  params.append('input', flight);
  params.append('options', JSON.stringify(options));
  params.append('format', JSON.stringify(format));
  
  return axios.post('https://www.pnrconverter.com/write-file.php', params);
}