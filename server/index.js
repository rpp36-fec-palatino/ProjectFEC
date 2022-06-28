const express = require('express');
let app = express();
const axios = require('axios');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');



// api's can go here



















/********************API Calls for Reviews******************************/







var port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ', port);
});