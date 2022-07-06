const axios = require('axios');
const config = require('../config.js');

let apiGet = (url) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };

  return axios(options).catch((err)=> {
    console.log(`github repo error: ${err.response.data.message}`);
  });
};

module.exports.apiGet = apiGet;