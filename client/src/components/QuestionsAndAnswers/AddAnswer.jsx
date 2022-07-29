import React, {useState} from 'react';
import axios from 'axios';
import AddAnswerPhoto from './AddAnswerPhoto.jsx';
import style from './styles/AddAnswerModal.module.css';
import UploadPhotoModal from './UploadPhotoModal.jsx';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

const AddAnswer = (props) => {
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFile] = useState([]);
  const [uploadedImage, setUploadedImage] = useState([]);
  const url = '/qa/questions/answers';

  return (
    <div id="answerModal" className={style.modal}>
      <h4 id="addAnswerTitle">Submit your answer for {props.productName}: {props.questionBody}</h4>
      <form id="addAnswerForm">
        <input type="hidden" id="question_id" name="question_id" value={props.questionId}></input>
        <label for="yourAnswer"><b id="addAnswerBodyTitle">Your Answer*</b></label><br></br>
        <textarea name="body" id="addAnswerBody" rows="10" cols="30" maxLength="1000" required></textarea><br></br>
        <label for="upload"><b id="addAnswerPhotoUploadLimitText">Upload your photos (limit 5)</b></label><br></br>
        {uploadedImage.length ?
          <div id="addAnswerPhotoPreview" className={style.imageContainer}>
            { uploadedImage.map((photo, index) => {
              return (
                <AddAnswerPhoto key={index} link={photo}/>
              );
            })}

          </div>
          : <p id="addAnswerNoPhotoText">No photos yet</p>}

        {(images.length < 5) ? <input type="file" name="upload" id="addAnswerUploadButton" onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            let results = images;
            let files = imageFiles;

            results.push(URL.createObjectURL(img));
            files.push(img);
            setImages(results);
            setImageFile(files);

            let updated = [];
            imageFiles.forEach(image => {
              let formData = new FormData();
              formData.append('image', image);
              axios.post('/upload/images', formData, { headers: { 'content-Type': 'multipart/form-data' } })
                .then(response => {
                  updated.push(response.data);
                  setUploadedImage(updated);
                }).catch(err => {
                  console.log('error uploading');
                });
            });

          }
        }}></input> : null}
        <br></br><label for="name"><b id="addAnswerNicknameTitle">What is your nickname*</b></label><br></br>
        <input type="text" id="name" name="name" placeholder="Example: jack543!" maxLength="60" required></input><br></br>
        <label for="email"><b>Your email*</b></label><br></br>
        <input type="email" id="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input><br></br>
        <label for="email" id="addAnswerAuthenticationText">For authentication reasons, you will not be emailed</label><br></br>
        <input type="button" id="addAnswerSubmit" value="Submit" onClick={() => {
          var options = {
            // eslint-disable-next-line camelcase
            question_id: document.getElementById('question_id').value,
            body: document.getElementById('addAnswerBody').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            photos: uploadedImage
          };
          var validateEmail = false;
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(options.email)) {
            validateEmail = true;
          }
          if (options.body !== '' && options.name !== '' && validateEmail === true) {
            props.addAns(url, options);
            props.cancel();
          } else {
            var formData = '';
            for (const property in options) {
              if (options[property] === '' && property !== 'email') {
                formData += property + ', ';
              }
            }
            if (!validateEmail) {
              formData += 'email, ';
            }
            formData = formData.slice(0, formData.length - 2);
            formData = formData + '.';
            alert('You must fix the following errors in ' + formData);
          }
        }}></input><button onClick={() => props.cancel()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddAnswer;