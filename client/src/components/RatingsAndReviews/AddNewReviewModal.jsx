import React from 'react';
import AddStarRating from './AddStarRating.jsx';
import AddNewReviewModalCSS from './cssModule_Reviews/AddNewReviewModal.module.css';

class AddNewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentItemName: '',

      recommendStatus: 'yes', //default

      starRating: '' //default

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



  render () {
    return (
      <div className = {AddNewReviewModalCSS.modalContainer}>
        <h3>Add a New Review</h3>
        <form>
          <div id="heading">
            <div>Write Your Review</div>
            <div style={{'color': 'blue'}}>About  {this.state.currentItemName}</div>
          </div>

          <div name="rating">
            <br />
            <h4>Overall Rating</h4>
            <AddStarRating />
          </div>


          <span id="recommend">
            <label>Recommend: </label>
            <input type="radio" value="yes" name="recommend" checked={this.state.recommendStatus === 'yes'} onChange={e => this.onValueChange(e)} /> Yes
            <input type="radio" value="no" name="recommend" checked={this.state.recommendStatus === 'no'} onChange={e => this.onValueChange(e)} /> No
          </span>


          <div>
            <input type="text" name="name" placeholder="name" />
            <br />
            <input type="text" name="email" placeholder="email" />
            <br />
            <input type="text" name="summary" placeholder="summary" maxLength='60'/>
          </div>
          <div>
            <textarea id="body" type="text" name="body" placeholder="your review..." maxLength='1000' rows="4" />
          </div>

          {'===Add Characteristic component here==='}
          <div id="characteristics">


          </div>


          {'======images upload ======'}
          <div>
            <input type="file" onChange={e => {}} />
            <button onClick={e => {}}>
                  Upload your images
            </button>
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