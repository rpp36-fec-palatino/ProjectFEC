import React from 'react';
import {useState} from 'react';
import AnswerPhotoStyle from './styles/AnswerPhoto.module.css';

const AnswerPhoto = (props) => {
  const [imageModal, setImageModal] = useState(false);
  const photo = props.link;

  return (
    <div>
      <img id={AnswerPhotoStyle.answerPhoto} src={photo} alt="answer photo" width="150px" height="150px" onClick={() => { setImageModal(!imageModal); }}></img>
      {imageModal ? <div><img className={AnswerPhotoStyle.modal} src={photo} alt="answer full-photo" onClick={() => { setImageModal(!imageModal); }}></img></div> : null}
    </div>
  );
};

export default AnswerPhoto;