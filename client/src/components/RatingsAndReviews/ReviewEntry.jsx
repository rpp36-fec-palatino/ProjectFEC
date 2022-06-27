import React from 'react';

const ReviewEntry = (props) => {

  return (
    <div>
      <div>Stars panel ***** (solid outlined stars with filled amount indicating scores)</div>
      <span>username (only username, no emails)</span>
      <span>timestamp(Month DD, YYYY)</span>
      <h3>Review Summary (60 characters max)</h3>
      <p>Review Body (50-1000 chars, up to 5 imgs, 250 chars display by default)  </p>
      <span> &#10004; I recommend this product (only display when the user recommend the product)</span>
      <div className="response-to-review">
        <b>Response from seller (this div only render when there is response to the review)</b>
        <br />
        response content...

      </div>
      <div className="review-entry-footer">
        <span>Helpful?</span>
        <button>Yes(number)</button>
        <button>Report</button>
      </div>
      {'============================================='}

    </div>

  );
};




export default ReviewEntry;