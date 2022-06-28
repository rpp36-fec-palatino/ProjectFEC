import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReview: false
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
        <ReviewsList addReview = {this.state.addReview} clickAddReview = {this.clickAddReviewBtn.bind(this)}/>
        <Ratings />
      </div>
    );
  }
}

export default RatingsAndReviews;