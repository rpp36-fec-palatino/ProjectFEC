import React from 'react';

class AddNewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      recommendStatus: 'yes' //default

    };
  }

  componentDidMount () {
  }


  onValueChange(e) {
    this.setState({
      recommendStatus: e.target.value
    });
  }



  render () {
    return (
      <div>
        <h3>Add a New Review</h3>
        <form>
          <div id="heading">
            <div>Write Your Review</div>
          </div>
          <div name="rating">
            {'***Start Rating component here***'}
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
          <br />

          <button>Submit Review</button>





        </form>


      </div>
    );
  }
}

export default AddNewReviewModal;