import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProductsAndOutfits from './components/RelatedProductsAndOutfits/index.jsx';
import exampleData from './components/ProductOverview/exampleData.js';
import exampleQuestions from './components/QuestionsAndAnswers/exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 71697,
      currentAvgRating: 0,
      product: exampleData.product71697,
      productStyle: exampleData.productStyle71697,
      questionsAndAnswers: exampleQuestions,
      outfit: {},
      relatedProductsIds: [],
      relatedProducts: [],
      relatedProductsStyles: {},
      relatedProductsRatings: {}
    };
    this.modifyOutfit = this.modifyOutfit.bind(this);
  }

  componentDidMount () {
    let currentPath = window.location.pathname;
    console.log('this is currentPath:', currentPath);
    let sampleId = currentPath.slice(1);
    //this is the default home page display item;
    //also need to handle invalid product id, error boundary?
    if (sampleId === '') {
      sampleId = this.state.currentId;
    }
    this.setState({currentId: sampleId});
    this.getProduct(sampleId, true);
    this.getProductStyles(sampleId);
    this.getQuestions(sampleId);
    this.getAvgRating(sampleId);
    this.getRelatedProductsIds(sampleId);
    this.getRelatedProductsStyles(sampleId);
    this.getRelatedProductsRatings(sampleId);
  }

  changeProduct(event) {
    console.log(event);
    this.setState({currentId: event});
  }

  getRelatedProductsIds (id) {
    let url = `/products/${id}/related`;
    axios.get(url)
      .then(result => {
        var relatedIds = result.data;
        var relatedProducts = [];

        for (var i = 0; i < relatedIds.length; i++) {
          var url = `/products/${relatedIds[i]}`;
          relatedProducts.push(new Promise((res, rej) => {
            axios.get(url)
              .then(result => {
                res(result.data);
              });
          }));
        }

        Promise.all(relatedProducts)
          .then(result => {
            this.setState({
              relatedProductsIds: relatedIds,
              relatedProducts: result
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRelatedProductsStyles (id) {
    let url = `/products/${id}/related`;
    axios.get(url)
      .then(result => {
        var relatedIds = result.data;
        var relatedProductsStyles = [];

        for (var i = 0; i < relatedIds.length; i++) {
          var url = `/products/${relatedIds[i]}/styles`;
          relatedProductsStyles.push(new Promise((res, rej) => {
            axios.get(url)
              .then(result => {
                res(result.data);
              });
          }));
        }

        var relatedProductsStys = {};

        Promise.all(relatedProductsStyles)
          .then(result => {
            for (var j = 0; j < result.length; j++) {
              var noDefault = true;
              for (var k = 0; k < result[j].results.length; k++) {
                if (result[j].results[k]['default?']) {
                  noDefault = false;
                  relatedProductsStys[result[j].product_id] = result[j].results[k];
                }
              }
              if (noDefault) {
                relatedProductsStys[result[j].product_id] = result[j].results[0];
              }
              relatedProductsStys[result[j].product_id].rating = parseInt(result[j].product_id);
            }

            this.setState({
              relatedProductsStyles: relatedProductsStys
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRelatedProductsRatings (id) {
    let url = `/products/${id}/related`;
    axios.get(url)
      .then(result => {
        var relatedIds = result.data;
        var relatedProductsRat = [];
        var relatedProductsRats = {};

        for (var i = 0; i < relatedIds.length; i++) {
          let url = `/products/${relatedIds[i]}/reviews/avg_star`;
          relatedProductsRat.push(new Promise((res, rej) => {
            axios.get(url)
              .then(result => {
                res(result.data);
              });
          }));
        }

        Promise.all(relatedProductsRat)
          .then(result => {
            for (var j = 0; j < relatedIds.length; j++) {
              relatedProductsRats[relatedIds[j]] = result[j];
            }
          });
        this.setState({relatedProductsRatings: relatedProductsRats});
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProduct (id, setCurrent, callback) {
    let url = `/products/${id}`;
    axios.get(url)
      .then(result => {
        if (setCurrent) {
          this.setState({product: result.data, currentId: id});
        }
        if (callback) {
          callback(result.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProductStyles (id) {
    let url = `/products/${id}/styles`;
    axios.get(url)
      .then(result => {
        this.setState({productStyle: result.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  getQuestions (id) {
    let url = `/products/${id}/questions/`;
    axios.get(url)
      .then(result => {
        console.log('getQuestions', result.data);
        this.setState({questionsAndAnswers: result.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  getAvgRating (id) {
    let url = `/products/${id}/reviews/avg_star`;
    axios.get(url)
      .then(result => {
        this.setState({
          currentAvgRating: result.data
        })
          .catch(error => {
            console.log(error);
          });
      });
  }

  modifyOutfit (action, id) {
    if (action === 'add') {
      if (this.state.outfit[id] === undefined) {
        let outfit = this.state.outfit;
        this.getProduct(id, false, (item) => {
          outfit[id] = item;
          this.setState({outfit: outfit});
        });
      }
    }
    if (action === 'remove') {
      if (this.state.outfit[id] !== undefined) {
        let outfit = this.state.outfit;
        delete outfit[id];
        this.setState({outfit: outfit});
      }
    }
  }

  render () {
    return (
      <div>
        <ProductOverview
          currentId={this.state.currentId}
          product={this.state.product}
          productStyle={this.state.productStyle}
          avgRating={this.state.currentAvgRating}
          outfit={this.state.outfit}
          modifyOutfit={this.modifyOutfit}/>

        {this.state.relatedProducts.length > 0 && Object.keys(this.state.relatedProductsStyles).length > 0 ? <RelatedProductsAndOutfits currentId={this.state.currentId}
          relatedProductsIds={this.state.relatedProductsIds} relatedProducts={this.state.relatedProducts}
          relatedProductsStyles = {this.state.relatedProductsStyles}
          relatedProductsRatings = {this.state.relatedProductsRatings}
          changeProduct={this.changeProduct.bind(this)}
        /> : <div>RELATED PRODUCTS</div>}

        <QuestionsAndAnswers questions={this.state.questionsAndAnswers}/>
        <RatingsAndReviews
          currentId = {this.state.currentId}
          currentProductName = {this.state.product.name}
        />
      </div>

    );
  }
}

/*****Edit to make it compatible with latest react version**********/
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
