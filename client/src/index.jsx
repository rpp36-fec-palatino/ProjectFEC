import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import ProductOverview from './components/ProductOverview/index.jsx';
import RelatedProductsAndOutfits from './components/RelatedProductsAndOutfits/index.jsx';
import exampleData from './components/ProductOverview/exampleData.js';
import exampleQuestions from './components/QuestionsAndAnswers/exampleData.js';
import ErrorBoundary from './ErrorBoundary.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0,
      currentAvgRating: 0,
      product: exampleData.productblank,
      productStyle: exampleData.productStyleblank,
      questionsAndAnswers: exampleQuestions,
      outfit: JSON.parse(window.localStorage.getItem('outfit')) || {},
      outfitStyles: JSON.parse(window.localStorage.getItem('outfitStyles')) || {},
      outfitRatings: JSON.parse(window.localStorage.getItem('outfitRatings')) || {},
      hasError: false,
      reviewCount: 0,
      relatedProductsIds: [],
      relatedProducts: [],
      relatedProductsStyles: {},
      relatedProductsRatings: {},
      productStyleId: 444218
    };
    this.modifyOutfit = this.modifyOutfit.bind(this);
    this.passReviewCount = this.passReviewCount.bind(this);
  }

  componentDidMount () {
    let currentPath = window.location.pathname;
    console.log('this is currentPath:', currentPath);
    let sampleId = currentPath.slice(1);
    if (sampleId === '') {
      sampleId = 71697;
    }
    this.setState({currentId: sampleId});
    this.getProduct(sampleId, true);
    this.getProductStyles(sampleId, true);
    this.getQuestions(sampleId);
    this.getAvgRating(sampleId);
    this.getRelatedProductsIds(sampleId);
    this.getRelatedProductsStyles(sampleId);
    this.getRelatedProductsRatings(sampleId);
  }

  getProductStyleNumber(event) {
    this.setState({productStyleId: event});
  }

  changeProduct(event) {
    // let currentPath = window.location.pathname;
    // currentPath += event;
    // console.log('this is currentPath:', currentPath);
    // let sampleId = currentPath.slice(1);
    window.location.href = '/' + event;
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
            this.setState({relatedProductsRatings: relatedProductsRats});
          });
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
        this.setState({hasError: true});
      });
  }

  getProductStyles (id, setCurrent, callback) {
    let url = `/products/${id}/styles`;
    axios.get(url)
      .then(result => {
        if (setCurrent) {
          this.setState({productStyle: result.data});
        }
        if (callback) {
          callback(result.data);
        }
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
        });

      })
      .catch(error => {
        console.log(error);
      });
  }

  getProductRating (id, callback) {
    let url = `/products/${id}/reviews/avg_star`;
    axios.get(url)
      .then(result => {
        if (callback) {
          callback(result.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  modifyOutfit (action, id) {
    if (action === 'add') {
      if (this.state.outfit[id] === undefined) {
        let outfit = this.state.outfit;
        let outfitStyles = this.state.outfitStyles;
        let outfitRatings = this.state.outfitRatings;

        this.getProduct(id, false, (item) => {
          outfit[id] = item;
          window.localStorage.setItem('outfit', JSON.stringify(outfit));
          // super.setState(outfit);
        });
        this.getProductStyles(id, false, (item) => {
          var item2 = {};
          item2['product_id'] = item['product_id'];
          item2['results'] = [];
          for (var j = 0; j < item.results.length; j++) {
            if (item.results[j].style_id === this.state.productStyleId) {
              item2.results.push(item.results[j]);
            }
          }
          outfitStyles[id] = item2;
          window.localStorage.setItem('outfitStyles', JSON.stringify(outfitStyles));
          // super.setState(outfit, outfitStyles);
        });
        this.getProductRating(id, (item) => {
          outfitRatings[id] = item;
          window.localStorage.setItem('outfitRatings', JSON.stringify(outfitRatings));
          // super.setState(outfit, outfitStyles);
        });

        this.setState({outfit: outfit, outfitStyles: outfitStyles, outfitRatings: outfitRatings});
      }
    }
    if (action === 'remove') {
      if (this.state.outfit[id] !== undefined) {
        // let outfit = this.state.outfit;
        // delete outfit[id];
        // window.localStorage.setItem('outfit', JSON.stringify(outfit));
        // super.setState(outfit);

        let outfit = this.state.outfit;
        let outfitStyles = this.state.outfitStyles;
        let outfitRatings = this.state.outfitRatings;

        delete outfit[id];
        window.localStorage.setItem('outfit', JSON.stringify(outfit));
        delete outfitStyles[id];
        window.localStorage.setItem('outfitStyles', JSON.stringify(outfitStyles));
        delete outfitRatings[id];
        window.localStorage.setItem('outfitRatings', JSON.stringify(outfitRatings));

        this.setState({outfit: outfit, outfitStyles: outfitStyles, outfitRatings: outfitRatings});
      }
    }
  }

  passReviewCount(count) {
    this.setState({
      reviewCount: count
    });
  }

  render () {
    const {reviewCount} = this.state;
    if (this.state.hasError) {
      return <h1>Oops! Product not found.</h1>;
    } else {
      return (

        <div>
          <ErrorBoundary>
            <ProductOverview
              currentId={this.state.currentId}
              product={this.state.product}
              productStyle={this.state.productStyle}
              avgRating={this.state.currentAvgRating}
              outfit={this.state.outfit}
              modifyOutfit={this.modifyOutfit}
              reviewCount={this.state.reviewCount}
              getProductStyleNumber={this.getProductStyleNumber.bind(this)}/>
          </ErrorBoundary>
          <ErrorBoundary>
            {this.state.relatedProducts.length > 0 && Object.keys(this.state.relatedProductsStyles).length > 0
            && Object.keys(this.state.relatedProductsStyles).length > 0 ? <RelatedProductsAndOutfits currentId={this.state.currentId}
                relatedProductsIds={this.state.relatedProductsIds} relatedProducts={this.state.relatedProducts}
                relatedProductsStyles = {this.state.relatedProductsStyles}
                relatedProductsRatings = {this.state.relatedProductsRatings}
                changeProduct={this.changeProduct.bind(this)}
                outfits={Object.keys(this.state.outfit)}
                outfit={this.state.outfit}
                outfitStyles={this.state.outfitStyles}
                outfitRatings={this.state.outfitRatings}
                modifyOutfit={this.modifyOutfit.bind(this)}
                product = {this.state.product}
              /> : <div>RELATED PRODUCTS</div>}

          </ErrorBoundary>
          <ErrorBoundary>
            <QuestionsAndAnswers questions={this.state.questionsAndAnswers}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <RatingsAndReviews
              currentId = {this.state.currentId}
              currentProductName = {this.state.product.name}
              passReviewCount = {this.passReviewCount}
            />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

/*****Edit to make it compatible with latest react version**********/
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
