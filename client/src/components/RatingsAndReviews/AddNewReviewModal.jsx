import React from 'react';
import AddStarRating from './AddStarRating.jsx';
import UploadImgModal from './UploadImgModal.jsx';
import CharacteristicsForm from './CharacteristicsForm.jsx';

import AddNewReviewModalCSS from './cssModule_Reviews/AddNewReviewModal.module.css';

class AddNewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentItemName: '',

      recommendStatus: 'yes', //default

      starRating: '', //default

      uploadModal: false

    };
  }

  componentDidMount () {
    this.setState({
      currentItemName: this.props.currentName
    });
  }


  onValueChange(e) {
    this.setState({
      recommendStatus: e.target.value
    });
  }

  uploadModalPop(e) {
    e.preventDefault();
    this.setState({
      uploadModal: true
    });
  }



  render () {
    return (
      <div data-testid="addNewModal" id="add-new-review-title" className = {AddNewReviewModalCSS.modalContainer}>
        <h3 >Add a New Review</h3>
        <form>
          <div id="heading">
            <span>Write Your Review</span>
            <div style={{'color': '#00334E'}}>About  {this.state.currentItemName}</div>
          </div>

          <div name="rating">
            <br />
            <b>Overall Rating *</b>
            <AddStarRating />
          </div>
          <br />


          <div id="recommend">
            <label><b>Do you recommend this product? *</b> </label>
            <input type="radio" value="yes" name="recommend" checked={this.state.recommendStatus === 'yes'} onChange={e => this.onValueChange(e)} /> Yes
            <input type="radio" value="no" name="recommend" checked={this.state.recommendStatus === 'no'} onChange={e => this.onValueChange(e)} /> No
          </div>
          <br />


          <CharacteristicsForm currentMeta = {this.props.currentMeta}/>
          <br />


          <div>
            <label><b>Summary</b> </label>
            <br />
            <input type="text" name="summary" placeholder="summary" maxLength='60'/>
          </div>
          <div>
            <label><b>Review Body *</b></label>
            <br />
            <textarea id="body" type="text" name="body" placeholder="your review..." maxLength='1000' rows="4" />
          </div>


          <div>
            <button data-testid="popUploadImg" onClick = {e => this.uploadModalPop(e)}>Upload Images</button>
            {this.state.uploadModal
              ? <UploadImgModal/>
              : null

            }

          </div>
          <div>
            <label><b>Nickname *</b></label>
            <input type="text" name="name" placeholder="name" />
            <br />
            <label><b>Email *</b></label>
            <input type="text" name="email" placeholder="email" />
            <br />
          </div>


          <br />

          <button>Submit Review</button>
          <button onClick = {e => this.props.handleCancelClick(e)}>cancel</button>





        </form>


      </div>
    );
  }
}

export default AddNewReviewModal;