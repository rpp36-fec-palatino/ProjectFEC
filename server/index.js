const express = require('express');
let app = express();
const axios = require('axios');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');



// api's can go here

//  Every time a product is selected, a minimum of the following API calls need
//  to be made in order to populate the page. We may need to make each of these
//  calls separately (& async) in order for page to load faster

app.get('/product', (req, res) => {
  // pass in desired product id from client in request body
  let product = req.body.product;

  // make API call for product_id
  let apiProductId = apiUrl + `/products/${product}`;

  // make API call for product styles
  let apiProductStyles = apiUrl + `/products/${product}/styles`;

  // make API call for related products
  // Note: Subsequent product id calls will need be made for details on each related product
  let apiProductRelated = apiUrl + `/products/${product}/related`;

  // make API call for reviews
  let apiProductReview = apiUrl + `/reviews?product_id=${product}`;

  // make API call for reviews metadata
  let apiProductReviewMeta = apiUrl + `/reviews/meta?product_id=${product}`;

  // make API call for questions
  // Note: Subsequent answers calls will need to be made for each individual answer
  let apiProductQA = apiUrl + `/qa/questions?product_id=${product}`;

});

/********************API Calls for Reviews******************************/







var port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ', port);
});