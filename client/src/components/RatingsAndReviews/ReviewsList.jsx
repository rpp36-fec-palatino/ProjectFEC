import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import AddNewReviewModal from './AddNewReviewModal.jsx';

const ReviewsList = (props) => {
  return (
    <div>

      <div className="sort-slect">
        <h3> xxx reviews, sorted by </h3>
        <select value='relevant' >
          <option name="relevant">Relevant</option>
          <option name="date">Newest</option>
          <option name="helpful">Helpful</option>
        </select>
      </div>
      <br/>
      {"--------------------------------------------------------------"}

      <div>
        <ReviewEntry />
        <ReviewEntry />

      </div>
      <button>MORE REVIEWS (only appear if there are more than 2 reviews)</button>
      <button onClick={e => props.clickAddReview(e)}>ADD A NEW REVIEW +</button>
      {props.addReview ? <AddNewReviewModal /> : null}





    </div>
  )
}



export default ReviewsList;