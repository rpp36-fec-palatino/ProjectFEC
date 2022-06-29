import React from 'react';
import ReviewEntryCSS from './cssModule_Reviews/ReviewEntry.module.css';
/*
    {
      'review_id': 1254282,
      'rating': 4,
      'summary': 'I am liking these glasses',
      'recommend': true,
      'response': 'Glad you\'re enjoying the product!',
      'body': 'They are very dark. But that\'s good because I\'m in very sunny spots',
      'date': '2019-06-23T00:00:00.000Z', 'reviewer_name': 'bigbrotherbenjamin',
      'helpfulness': 7, 'photos': []
    },
        {
      'review_id': 1254284,
      'rating': 3,
      'summary': 'I\'m enjoying wearing these shades',
      'recommend': true,
      'response': '',
      'body': 'Comfortable and practical.',
      'date': '2019-04-14T00:00:00.000Z',
      'reviewer_name': 'shortandsweeet',
      'helpfulness': 7,
      'photos': [
        { 'id': 2414648, 'url': 'https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' },
        { 'id': 2414649, 'url': 'https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80' }, { 'id': 2414650, 'url': 'https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' }
      ]
    },


*/

const ReviewEntry = (props) => {
  const reviewDate = new Date(props.review.date)
    .toLocaleDateString({}, {timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric'});




  return (
    <div className={ReviewEntryCSS.reviewEntryContainer}>
      <div>Stars rating: {props.review.rating} </div>

      <div className={ReviewEntryCSS.usernameTimestamp}>
        <span>{props.review.reviewer_name}</span>
        {',    '}
        <span>{reviewDate}</span>
      </div>

      <h3> {props.review.summary}</h3>
      <p>Body: {props.review.body} </p>

      {/* conditional rendering of recommendation */}
      {props.review.recommend
        ? <div className={ReviewEntryCSS.recommendation}>
        &#10004; I recommend this product
        </div>
        : null
      }


      {/* conditional rendering of seller's response */}
      {props.review.response && props.review.response.length
        ? <div className={ReviewEntryCSS.sellerResponse}>
          <b>Response from seller:</b>
          <br />
          <br />
          {props.review.response}

        </div>
        : null

      }

      {/* conditional rendering of review photos */}
      {props.review.photos.length > 0
        ? <div>
          {props.review.photos.map(
            (photo, i) => (
              <div key ={photo.id} >
                review photo {i + 1}:
                <img
                  alt = 'review-photo'
                  src = {photo.url}
                  className={ReviewEntryCSS.reviewPhotos}
                />
              </div>
            )

          )}
        </div>
        : null

      }



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