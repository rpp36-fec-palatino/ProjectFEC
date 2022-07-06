import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import {sampleReviews71697, sampleReviews71698, sampleMetaReview71698 } from '../../../../sampleData/sampleReviewData.js';
import ReviewsMainCSS from './cssModule_Reviews/ReviewsMain.module.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReview: false,
      loadMore: true,
      currentId: sampleReviews71698.product,
      currentReviews: sampleReviews71698.results,
      currentDisplayedReviews: sampleReviews71698.results.slice(0, 2), //initial display 2 reviews
      currentMetaReview: sampleMetaReview71698

    };
  }

  componentDidMount () {
  }

  clickAddReviewBtn(e) {
    this.setState({
      addReview: true
    });
  }

  clickLoadMoreBtn(e) {
    let curDisplays = this.state.currentDisplayedReviews;
    if (curDisplays.length < sampleReviews71698.results.length - 2) {
      let i = curDisplays.length;
      this.setState({
        currentDisplayedReviews: sampleReviews71698.results.slice(0, i + 2),

      });

    } else {
      this.setState({
        currentDisplayedReviews: sampleReviews71698.results,
        loadMore: false

      });
    }

  }

  render () {
    return (
      <div>
        <h1>Ratings and Reviews</h1>
        <button>testReview: product_id: 71697</button>
        <button>testReview: product_id: 71698</button>
        <div className={ReviewsMainCSS.box}>
          <Ratings
            currentMetaReview = {this.state.currentMetaReview}
          />
          <ReviewsList
            currentReviews = {this.state.currentReviews}
            currentDisplayReviews = {this.state.currentDisplayedReviews}
            addReview = {this.state.addReview}
            clickAddReview = {this.clickAddReviewBtn.bind(this)}
            loadMore = {this.state.loadMore}
            clickLoadMoreBtn = {this.clickLoadMoreBtn.bind(this)}
          />


        </div>

      </div>
    );
  }
}

export default RatingsAndReviews;