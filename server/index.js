const express = require('express');
let app = express();
const axios = require('axios');
const apiGet = require('./apiHelper.js').apiGet;
const helper = require('../client/src/components/RatingsAndReviews/helperFns/helper.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');



// api's can go here

//  Every time a product is selected, a minimum of the following API calls need
//  to be made in order to populate the page. We may need to make each of these
//  calls separately (& async) in order for page to load faster


/*
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

*/



app.get('/products/:id', (req, res) => {
  // let id = req.body.id;
  let id = req.params.id;
  let apiProductId = apiUrl + `/products/${id}`;
  apiGet(apiProductId)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get('/products/:id/related', (req, res) => {
  // let id = req.body.id;
  let id = req.params.id;
  let apiProductIdRelated = apiUrl + `/products/${id}/related`;
  apiGet(apiProductIdRelated)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.get('/products/:id/styles/', (req, res) => {
  let id = req.params.id;
  let apiProductStyles = apiUrl + `/products/${id}/styles`;
  apiGet(apiProductStyles)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});






/**************Server Calls for Ratings and Reviews********************************/
app.get('/products/:id/reviews/', (req, res) => {
  let id = req.params.id;

  console.log('this is id:', id);
  console.log('this is req.url', req.url);
  console.log('this is req.query', req.query);
  let sort = 'relevant'; //default
  let apiProductReview = apiUrl + `/reviews?sort=${sort}&product_id=${id}&count=20`;

  apiGet(apiProductReview)
    .then(result => {
      // console.log('this is review data:', result.data);
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/products/:id/reviews/meta', (req, res) => {
  let id = req.params.id;
  let apiProductReviewMeta = apiUrl + `/reviews/meta?product_id=${id}`;
  apiGet(apiProductReviewMeta)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

/*********** get average stars *******************/
app.get('/products/:id/reviews/avg_star', (req, res) => {
  let id = req.params.id;
  let apiProductReviewMeta = apiUrl + `/reviews/meta?product_id=${id}`;
  apiGet(apiProductReviewMeta)
    .then(result => {
      let ratingObj = result.data.ratings;
      console.log('this is ratingObj:', ratingObj);
      avgRating = helper.avgStarScores(ratingObj);
      console.log(avgRating);
      res.json(avgRating);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
















app.get('/products/:id/questions/', (req, res) => {
  let id = req.params.id;
  let apiProductQA = apiUrl + `/qa/questions?product_id=${id}`;
  apiGet(apiProductQA)
    .then(result => {
      res.status(200).send(result.data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.put('/qa/questions/:qid/helpful', (req, res) => {
  console.log('qa helpful', req.params.id);
  let qid = req.params.id;
  let apiProductQA = apiUrl + `/qa/questions/${qid}/helpful`;
  apiGet(apiProductQA)
    .then(result => {
      res.status(204).send(result.data);
    })
    .catch(err => {
      res.sendStatus(500);
    });

});







var port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ', port);
});