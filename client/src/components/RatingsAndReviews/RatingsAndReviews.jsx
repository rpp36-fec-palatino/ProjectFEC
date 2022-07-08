import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import {sampleReviews71697, sampleReviews71698, sampleMetaReview71698, sampleMetaReview71697 } from '../../../../sampleData/sampleReviewData.js';
import ReviewsMainCSS from './cssModule_Reviews/ReviewsMain.module.css';
import axios from 'axios';


class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 0,
      loadMore: true,
      currentReviews: [],
      currentDisplayedReviews: [],
      currentMetaReview: sampleMetaReview71697, //default
      ratingObj: {'5': '0', '4': '0', '3': '0', '2': '0', '1': '0'},
      recommended: {'false': '0', 'true': '0' },

      // currentId: sampleReviews71698.product,
      // currentReviews: sampleReviews71698.results,
      // currentDisplayedReviews: sampleReviews71698.results.slice(0, 2), //initial display 2 reviews
      // currentMetaReview: sampleMetaReview71698

    };
  }

  componentDidMount () {

    this.setState({currentProductId: this.props.currentId});
    this.displayCurrentProductReviews(this.props.currentId);
    this.displayCurrentProductReviewsMeta(this.props.currentId);

  }

  componentDidUpdate(prevProps, prevState) {
    //only change content if corresponding product id changes
    if (this.props. currentId !== prevProps.currentId) {
      this.componentDidMount();

    }

  }



  displayCurrentProductReviews(currentId) {
    axios.get(`/products/${currentId}/reviews/`)
      .then(response => {

        this.setState({
          currentReviews: response.data.results,
          currentDisplayedReviews: response.data.results.slice(0, 2)

        });

      }).catch(err => console.log('Err display reviews!', err));

  }

  // displayCurrentProductReviewsMeta = async(currentId) => {
  //   let metaReviewData = await axios.get(`/products/${currentId}/reviews/meta`);
  //   console.log('this is meta review', metaReviewData);
  //   this.setState({
  //     currentMetaReview: metaReviewData.data,
  //     ratingObj: metaReviewData.data.ratings,
  //     recommended: metaReviewData.data.recommended

  //   })
  // }

  displayCurrentProductReviewsMeta(currentId) {
    axios.get(`/products/${currentId}/reviews/meta`)
      .then(response => {
        this.setState({
          currentMetaReview: response.data,
          ratingObj: response.data.ratings,
          recommended: response.data.recommended
        });

      }).catch(err => console.log('Err display meta reviews!', err));

  }


  clickLoadMoreBtn(e) {
    let curDisplays = this.state.currentDisplayedReviews;
    let allReviews = this.state.currentReviews;
    if (curDisplays.length < allReviews.length - 2) {
      let i = curDisplays.length;
      this.setState({
        currentDisplayedReviews: allReviews.slice(0, i + 2),

      });

    } else {
      this.setState({
        currentDisplayedReviews: allReviews,
        loadMore: false

      });
    }

  }

  render () {
    return (
      <div>
        <h1>Ratings and Reviews</h1>
        <div className={ReviewsMainCSS.box}>
          <Ratings
            currentMetaReview = {this.state.currentMetaReview}
            ratingObj = {this.state.ratingObj}
            recommended = {this.state.recommended}
          />
          <ReviewsList
            currentReviews = {this.state.currentReviews}
            currentDisplayReviews = {this.state.currentDisplayedReviews}
            addReview = {this.state.addReview}
            loadMore = {this.state.loadMore}
            clickLoadMoreBtn = {this.clickLoadMoreBtn.bind(this)}
            currentProductName = {this.props.currentProductName}
          />


        </div>

      </div>
    );
  }
}

export default RatingsAndReviews;