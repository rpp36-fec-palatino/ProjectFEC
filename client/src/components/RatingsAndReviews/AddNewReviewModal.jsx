import React from 'react';
import AddStarRating from './AddStarRating.jsx';
import CharacteristicsForm from './CharacteristicsForm.jsx';
import axios from 'axios';

import AddNewReviewModalCSS from './cssModule_Reviews/AddNewReviewModal.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

class AddNewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentItemName: '',

      currentItemId: 0,

      recommendStatus: 'yes', //default

      starRating: '', //default

      characteristics: {},

      summary: '',

      ReviewBody: '',

      images: [],

      uploadedImages: [],

      // uploaded: false,

      nickeName: '',

      Email: '',

      posted: false,

      overallRatingErr: true,

      CharacteristicsErr: true,

      reviewBodyErr: true,

      nickenameErr: true,

      EmailEmpty: true,

      EmailFormatErr: true,

      hasError: false

    };
  }

  componentDidMount () {
    this.setState({
      currentItemName: this.props.currentName,
      currentItemId: this.props.currentProductId
    });
  }


  componentDidUpdate(prevState, prevProps) {


  }


  onValueChange(e) {
    this.setState({
      recommendStatus: e.target.value
    });
  }

  onImageChange(e) {

    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      let results = this.state.images;
      let preUploadStatus = this.state.uploaded;
      results.push(URL.createObjectURL(img));

      this.setState({
        images: results,
        // uploaded: !preUploadStatus
      });
    }
  }

  // imageUpload() {
  //   this.state.images.forEach(image => {
  //     let formData = new FormData();
  //     formData.append('image', image);
  //     axios.post('/upload/images', formData, { headers: { 'content-Type': 'multipart/form-data' } })
  //       .then(response => {
  //         let updated = this.state.uploadedImages.concat(response.data.url);
  //         this.setState({
  //           uploadedImages: updated
  //         });
  //       });
  //   });
  // }

  removeBtnClick(e) {
    e.preventDefault();
    console.log('e.currenttargetId:', e.currentTarget.id);
    let idToFilter = e.currentTarget.id.split('-')[2];
    let beforeRemove = this.state.images;
    let afterRemove = beforeRemove.slice(0, idToFilter).concat(beforeRemove.slice(idToFilter + 1));
    this.setState({images: afterRemove});

  }

  passStarRating(overallRating) {
    console.log('this is the overall rating:', overallRating);
    this.setState({starRating: overallRating});
  }

  passCharRating(charRating) {
    console.log('this is the characteristics rating data:', charRating);
    //convert the key to the corresponding id:
    let charRatingConverted = {};
    for (let key in charRating) {
      if (charRating[key].length) {
        let charKeyId = this.props.currentMeta.characteristics[key].id;
        charRatingConverted[charKeyId] = Number(charRating[key]);
      }
    }
    console.log('this is processed:', charRatingConverted);
    this.setState({characteristics: charRatingConverted});
  }









  postReview(reviewObj) {

    axios.post('/reviews', reviewObj)
      .then(response => {
        console.log('Review posted!', response);
      }).catch(err => console.log('can not post review!', err));

  }

  validationInput() {
    if (this.state.starRating ) {
      this.setState({
        overallRatingErr: false
      });
    }
    if (Object.keys(this.state.characteristics).length === Object.keys(this.props.currentMeta.characteristics).length ) {
      this.setState({
        CharacteristicsErr: false
      });

    }
    if (this.state.ReviewBody.length >= 50 ) {
      this.setState({
        reviewBodyErr: false
      });
    }
    if (this.state.nickeName ) {
      this.setState({
        nickenameErr: false
      });
    }
    if (this.state.Email ) {
      this.setState({
        EmailEmpty: false
      });
    }
    if (this.state.Email ) {

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Email)) {
        this.setState({
          EmailFormatErr: false
        });

      }

    }
  }








  async submitBtnClick(e) {
    e.preventDefault();
    await(this.validationInput());

    if ( this.state.overallRatingErr || this.state.CharacteristicsErr || this.state.reviewBodyErr || this.state.nickenameErr || this.state.EmailEmpty || this.state.EmailFormatErr) {
      this.setState({hasError: true});
    } else {
      let reviewObj = {};
      // eslint-disable-next-line camelcase
      reviewObj.product_id = Number(this.state.currentItemId);
      reviewObj.rating = this.state.starRating;
      reviewObj.summary = this.state.summary;
      reviewObj.body = this.state.ReviewBody;
      if (this.state.recommendStatus === 'yes') {
        reviewObj.recommend = true;
      } else {
        reviewObj.recommend = false;
      }
      reviewObj.name = this.state.nickeName;
      reviewObj.email = this.state.Email;
      reviewObj.photos = this.state.images;
      reviewObj.characteristics = this.state.characteristics;
      console.log(reviewObj);

      this.postReview(reviewObj);
      this.setState({posted: true, hasError: false});
      this.props.refresh();

    }





  }









  render () {
    return (
      <WithTrackerHOC eventName={'AddNewReviewModal-index-2'}>
        <div className = {AddNewReviewModalCSS.dimmerBg}></div>
        <div data-testid="addNewModal" id="add-new-review-main" className = {AddNewReviewModalCSS.modalContainer} >
          <h3 >Add a New Review</h3>
          <form>
            <div id="heading">
              <span>Write Your Review</span>
              <div id="product-name" style={{'color': '#00334E'}}>About  {this.state.currentItemName}</div>
            </div>

            <div name="rating" id='Overall-star-rating'>
              <br />
              <b>Overall Rating *</b>

              <AddStarRating passStarRating={this.passStarRating.bind(this)}/>


            </div>
            <br />


            <div id="recommend">
              <label><b>Do you recommend this product? *</b> </label>
              <input type="radio" value="yes" name="recommend" checked={this.state.recommendStatus === 'yes'} onChange={e => this.onValueChange(e)} /> Yes
              <input type="radio" value="no" name="recommend" checked={this.state.recommendStatus === 'no'} onChange={e => this.onValueChange(e)} /> No
            </div>
            <br />


            <CharacteristicsForm currentMeta = {this.props.currentMeta} passCharRating = {this.passCharRating.bind(this)}/>
            <br />


            <div id='review-content'>
              <label><b>Review Summary</b> </label>
              <br />
              <textarea id='review-summary' type="text" name="summary" placeholder="Example: Best purchase ever!" maxLength='60' onChange = {e => this.setState({summary: e.target.value})}/>
            </div>
            <div>
              <label><b>Review Body *</b></label>
              <br />
              <textarea id="review-body" type="text" name="body" placeholder="Why did you like the product or not?" maxLength='1000' rows="4" onChange = {e => this.setState({ReviewBody: e.target.value})}/>
              {this.state.ReviewBody.length < 50
                ? <span>Minimun required characters left: {50 - this.state.ReviewBody.length}</span>
                : <span>Minimun reached!</span>

              }
            </div>


            <div id='imageUploader' >
              <h4>Upload your photos (up to 5) </h4>
              {this.state.images.length

                ? <div className = {AddNewReviewModalCSS.imageBox}>
                  {this.state.images.map((photo, index) => (
                    <div className = {AddNewReviewModalCSS.imageEntryContainer} key = {'uploadImg' + index}>
                      <span
                        className = {AddNewReviewModalCSS.removeBtn}
                        id={'remove-btn-' + index}
                        onClick={
                          e => {
                            this.removeBtnClick(e);

                          }
                        }> &#215;</span>

                      <img className = {AddNewReviewModalCSS.photoThumbnail} src={photo} />

                    </div>



                  ))}


                </div>
                : <div>no photo yet<br /></div>

              }

              {this.state.images.length < 5
                ? <div>
                  <br />
                  <label htmlFor="fileUpload">


                    <div id='addBtn' className = {AddNewReviewModalCSS.addBtn}>
  +
                    </div>
                  </label>
                  <input hidden id="fileUpload" type="file" onChange={this.onImageChange.bind(this)} accept="image/*" />

                </div>
                : null
              }



            </div>
            <br />


            <div id='user-info'>
              <label><b>What is your nickname *</b></label>
              <input id='nickname-input' type="text" name="name" placeholder="Example: jackson11!" onChange = {e => this.setState({nickeName: e.target.value})}/>
              <br />
              <label><b>Your Email *</b></label>
              <input id='email-input' type="text" name="email" placeholder="Example: jackson11@email.com" onChange = {e => this.setState({Email: e.target.value})}/>
              <p>For authentication reasons, you will not be emailed</p>

            </div>
            {this.state.posted ? <div>Review posted!</div> : null}

            <button id="submit-review-btn" onClick={e=> this.submitBtnClick(e)}>Submit Review</button>

            {/* input content validation */}
            {this.state.hasError
              ? <div id='submissionError' className = {AddNewReviewModalCSS.errMsg}>
            You must enter the following or fix:
                <br />
                {this.state.overallRatingErr
                  ? <li>OverallRating</li>
                  : null

                }
                {this.state.CharacteristicsErr
                  ? <li>Characteristics</li>
                  : null

                }
                {this.state.reviewBodyErr
                  ? <li>Review Body more than 50 chars</li>
                  : null

                }
                {this.state.nickenameErr
                  ? <li>Nickname</li>
                  : null

                }
                {this.state.EmailEmpty
                  ? <li>Email</li>
                  : null

                }
                {this.state.EmailFormatErr
                  ? <li>Email format Error</li>
                  : null

                }

              </div>

              : null



            }





            <div id="close-modal-btn" className = {AddNewReviewModalCSS.removeBtn2} onClick = {e => this.props.handleCancelClick(e)}>&#215;</div>





          </form>


        </div>
      </WithTrackerHOC>

    );
  }
}

export default AddNewReviewModal;