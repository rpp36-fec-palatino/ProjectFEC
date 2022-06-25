import React from 'react';

class AddNewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
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
      {"***Start Rating component here***"}
      </div>
      <span id="recommend">
        <div>Recommend: </div>
        <button>Yes</button>
        <button>No</button>

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

      {"===Add Characteristic component here==="}
      <br />

     <button>Submit Review</button>





      </form>


    </div>
    )
  }
}

export default AddNewReviewModal;