import React from 'react';
import AddNewReviewModalCSS from './cssModule_Reviews/AddNewReviewModal.module.css';

class UploadImgModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {



    };
  }

  componentDidMount () {

  }





  render () {
    return (
      <div className = {AddNewReviewModalCSS.subModalContainer}>
        <input type="file" onChange={e => {}} />
        <button onClick={e => {}}>
                  add your images : up to 5
        </button>


      </div>
    );
  }
}






export default UploadImgModal;