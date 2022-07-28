import React, {useState} from 'react';

import style from './styles/AddAnswerModal.module.css';
import UploadPhotoModal from './UploadPhotoModal.jsx';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

const AddAnswer = (props) => {
  const [images, setImages] = useState([]);
  const url = '/qa/questions/answers';

  return (
    <div id="answerModal" className={style.modal}>
      <h4>Submit your answer for {props.productName}: {props.questionBody}</h4>
      <form>
        <input type="hidden" id="question_id" name="question_id" value={props.questionId}></input>
        <label for="yourAnswer"><b>Your Answer*</b></label><br></br>
        <textarea name="body" id="body" rows="10" cols="30" maxLength="1000" required></textarea><br></br>
        <label for="upload"><b>Upload your photos (limit 5)</b></label><br></br>
        {images.length ? <div>{ images.map((photo) => (
          <img className={style.thumbnail} src={photo}></img>
        ) ) }</div> : <p>No photos yet</p>}
        {(images.length < 5) ? <input type="file" name="upload" onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            let photos = images;
            photos.push(URL.createObjectURL(img));
            setImages(photos);
          }
        }}></input> : null}
        <br></br><label for="name"><b>What is your nickname*</b></label><br></br>
        <input type="text" id="name" name="name" placeholder="Example: jack543!" maxLength="60" required></input><br></br>
        <label for="email"><b>Your email*</b></label><br></br>
        <input type="email" id="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="button" id="addAnswerSubmit" value="Submit" onClick={() => {
          var options = {
            // eslint-disable-next-line camelcase
            question_id: document.getElementById('question_id').value,
            body: document.getElementById('body').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            photos: images
          };
          props.addAns(url, options);
          props.cancel();
        }}></input><button onClick={() => props.cancel()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddAnswer;