const express = require('express');
let app = express();
const axios = require('axios');
const apiGet = require('./apiHelper.js').apiGet;
const apiPut = require('./apiHelper.js').apiPut;
const apiPost = require('./apiHelper.js').apiPost;
const helper = require('../client/src/components/RatingsAndReviews/helperFns/helper.js');
const path = require('path');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');

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
app.get('/reviews', (req, res) => {
  let id = req.params.id;

  console.log('this is req.query', req.query);
  let params = {
    page: req.query.page || 1,
    count: req.query.count || 5,
    sort: req.query.sort,
    // eslint-disable-next-line camelcase
    product_id: req.query.product_id
  };

  let apiProductReview = apiUrl + `/reviews?page =${params.page}&sort=${params.sort}&product_id=${params.product_id}&count=${params.count}`;
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

//update helpful count
app.put('/reviews/:review_id/helpful', (req, res) => {
  let reviewId = req.params.review_id;

  let options = {
    method: 'PUT',
    url: apiUrl + `/reviews/${reviewId}/helpful`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };

  axios(options)
    .then(response => {
      res.status(204).send(response.message);
    }).catch(
      err => { res.status(500).send(err); }
    );

});

//report review

app.put('/reviews/:review_id/report', (req, res) => {
  let reviewId = req.params.review_id;

  let options = {
    method: 'PUT',
    url: apiUrl + `/reviews/${reviewId}/report`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };

  axios(options)
    .then(response => {
      res.status(204).send(response.message);
    }).catch(
      err => { res.status(500).send(err); }
    );

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

/**************Server Calls for Questions and Answers********************************/
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

app.put('/qa/questions/:id/helpful', (req, res) => {
  let id = req.params.id;
  let apiProductQA = apiUrl + `/qa/questions/${id}/helpful`;
  apiPut(apiProductQA, id)
    .then(result => {
      res.sendStatus(result.status);
    })
    .catch(err => {
      res.sendStatus(500);
    });

});

app.put('/qa/answers/:id/helpful', (req, res) => {
  let id = req.params.id;
  let apiProductQA = apiUrl + `/qa/answers/${id}/helpful`;
  apiPut(apiProductQA, id)
    .then(result => {
      res.sendStatus(result.status);
    })
    .catch(err => {
      res.sendStatus(500);
    });

});

app.put('/qa/answers/:id/report', (req, res) => {
  let id = req.params.id;
  let apiProductQA = apiUrl + `/qa/answers/${id}/report`;
  apiPut(apiProductQA, id)
    .then(result => {
      res.sendStatus(result.status);
    })
    .catch(err => {
      res.sendStatus(500);
    });

});

app.post('/qa/questions', (req, res) => {
  let id = req.body.product_id;

  var conversion = req.body;
  var convertId = parseInt(req.body.product_id);
  // eslint-disable-next-line camelcase
  req.body.product_id = convertId;
  console.log(req.body);

  let apiProductQA = apiUrl + '/qa/questions';
  apiPost(apiProductQA, req.body)
    .then(result => {
      console.log('qa post success', result.status);
      res.status(201);
    })
    .catch(err => {
      console.log('qa post error');
      res.sendStatus(500);
    });
  res.redirect(`/${id}`);

});


app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});


var port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ', port);
});