import React from 'react';
import { useState } from 'react';
import ReviewEntryCSS from './cssModule_Reviews/ReviewEntry.module.css';
import Stars from './Stars.jsx';
import HelpfulAndReport from './HelpfulAndReport.jsx';


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
  let percent = (props.review.rating / 5) * 100;
  const [imagePop, setImagePop] = useState(false);
  const [imageUrl, setImageUrl] = useState('');






  return (
    <div className={ReviewEntryCSS.reviewEntryContainer} id='review-entry'>

      {/* stars rating display */}
      <div>
        {/* Stars rating: {props.review.rating} */}
        < Stars percent = {percent}/>
        <br />

      </div>

      <div className={ReviewEntryCSS.usernameTimestamp}>
        <span id='reviewer-name'>{props.review.reviewer_name}</span>
        {',    '}
        <span id='review-timestamp'>{reviewDate}</span>
      </div>

      <h3> {props.review.summary}</h3>
      <p id='review-body'> {props.review.body} </p>

      {/* conditional rendering of recommendation */}
      {props.review.recommend
        ? <div id='recomended-message' className={ReviewEntryCSS.recommendation}>
        &#10004; I recommend this product
        </div>
        : null
      }


      {/* conditional rendering of seller's response */}
      {props.review.response && props.review.response.length
        ? <div id='seller-response' className={ReviewEntryCSS.sellerResponse} style={{'backgroundColor': 'lightgrey'}}>
          <b>Response from seller:</b>
          <br />
          <br />
          {props.review.response}

        </div>
        : null

      }

      {/* conditional rendering of review photos */}
      {props.review.photos.length > 0
        ? <div className={ReviewEntryCSS.box}>
          {props.review.photos.map(
            (photo, i) => (


              <div key ={photo.id} >
                <img
                  id={'review-photo-' + photo.id}

                  alt = 'review-photo'
                  src = {photo.url}

                  className={ReviewEntryCSS.reviewPhotos}
                  onClick={() => {
                    setImagePop(!imagePop);
                    setImageUrl(photo.url);
                  }}
                  onError= {props.addDefaultSrc}

                />

              </div>

            )

          )}
          {imagePop
            ? <div id='image-pop-modal'
              className={ReviewEntryCSS.photoModal}
            >
              <div className={ReviewEntryCSS.photoModalScroller}>
                <img id='full-resolution-image'

                  onClick={() => setImagePop(!imagePop)}
                  alt = 'full-photo'
                  src = {imageUrl}
                />

              </div>




            </div>
            : null}
        </div>
        : null

      }

      <HelpfulAndReport
        count = {props.review.helpfulness}
        removeReportedReview = {props.removeReportedReview}
        refresh = {props.refresh}

        reviewId = {props.review.review_id}/>




      <hr
        style={{
          'background': 'grey',
          'color': 'grey',
          'borderColor': 'grey',
          'height': '1px',
          'marginRight': '35px'
        }}/>

    </div>

  );
};




export default ReviewEntry;