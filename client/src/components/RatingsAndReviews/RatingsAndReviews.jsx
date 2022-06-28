import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import {sampleReviews71697, sampleReviews71698 } from '../../../../sampleData/sampleReviewData.js';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReview: false,
      currentId: sampleReviews71698.product,
      currentReviews: sampleReviews71698.results,
      currentDisplayedReviews: sampleReviews71698.results.slice(0, 4),

    };
  }

  componentDidMount () {
  }

  clickAddReviewBtn(e) {
    this.setState({
      addReview: true
    });
  }

  render () {
    return (
      <div>
        <h1>Ratings and Reviews</h1>
        <ReviewsList
          currentReviews = {this.state.currentReviews}
          currentDisplayReviews = {this.state.currentDisplayedReviews}
          addReview = {this.state.addReview}
          clickAddReview = {this.clickAddReviewBtn.bind(this)}
        />
        <Ratings />
      </div>
    );
  }
}

export default RatingsAndReviews;