import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AddNewReviewModal from './AddNewReviewModal.jsx';
import ReviewsListCSS from './cssModule_Reviews/ReviewsList.module.css';

const ReviewsList = (props) => {
  return (
    <div className={ReviewsListCSS.reviewListMain}>

      <div className="sort-slect">
        <h3> xxx reviews, sorted by </h3>
        <select value='relevant' >
          <option name="relevant">Relevant</option>
          <option name="date">Newest</option>
          <option name="helpful">Helpful</option>
        </select>
      </div>
      <br/>
      {'--------------------------------------------------------------'}

      <div >
        {props.currentDisplayReviews.map(
          review => <ReviewEntry key = {review.review_id} review = {review} />
        )}
      </div>

      {/* conditional rendering when there are more than 2 reviews */}
      {props.currentReviews.length > 2
        ? <button>MORE REVIEWS</button>
        : null
      }

      <button onClick={e => props.clickAddReview(e)}>ADD A NEW REVIEW +</button>

      {props.addReview ? <AddNewReviewModal /> : null}





    </div>
  );
};



export default ReviewsList;