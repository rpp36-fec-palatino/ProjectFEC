import React from 'react';
import ReviewsListCSS from './cssModule_Reviews/ReviewsList.module.css';
/*
    {
      'review_id': 1275244,
      'rating': 3, 'summary': '',
      'recommend': true,
      'response': null,
      'body': 'sad;flkjsad;lfkjas;dlkfja;slkdjf;aslkdjf;lkasjdf;lkajsdff;lk',
      'date': '2022-06-10T00:00:00.000Z',
      'reviewer_name': 'asdf',
      'helpfulness': 9,
      'photos': []
    },


*/

const ReviewEntry = (props) => {
  const reviewDate = new Date(props.review.date)
    .toLocaleDateString({}, {timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric'});




  return (
    <div className={ReviewsListCSS.reviewEntryContainer}>
      <div>Stars rating: {props.review.rating} </div>
      <span>username:{props.review.reviewer_name}</span>
      {'    '}
      <span>{reviewDate}</span>
      <h3> {props.review.summary}</h3>
      <p>Body: {props.review.body} </p>
      <span> &#10004; I recommend this product (only display when the user recommend the product)</span>
      <div className="response-to-review">
        <b>Response from seller (this div only render when there is response to the review)</b>
        <br />
        response content...

      </div>
      <div className="review-entry-footer">
        <span>Helpful?</span>
        <button>Yes({props.review.helpfulness})</button>
        <button>Report</button>
      </div>
      {'============================================='}

    </div>

  );
};




export default ReviewEntry;