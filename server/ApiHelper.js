const axios = require('axios');
const config = require('../config.js');
const FormData = require('form-data');

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

let apiPut = (url, id) => {
  let options = {
    url: url,
    method: 'put',
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    params: id
  };

  return axios(options).catch((err) => {
    console.log('put error', err);
  });
};

let apiPost = (url, data) => {
  let options = {
    url: url,
    method: 'post',
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    data: data
  };

  return axios(options).catch((err) => {
    console.log('api post error', err);
  });
};


/***************************
 * imgbb upload helper
 * ********************** */

let uploadImage = (file) => {
  let formData = new FormData();
  formData.append('image', Buffer.from(file.buffer).toString('base64'));
  let options = {
    method: 'POST',
    url: `https://api.imgbb.com/1/upload?key=${config.IMGBB_KEY}`,
    headers: { 'content-Type': 'multipart/form-data' },
    data: formData

  };
  return axios(options);
};




module.exports.apiGet = apiGet;
module.exports.apiPut = apiPut;
module.exports.apiPost = apiPost;
module.exports.uploadImage = uploadImage;