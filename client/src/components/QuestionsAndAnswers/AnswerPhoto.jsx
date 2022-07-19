import React from 'react';
import {useState} from 'react';
import style from './styles/AnswerPhoto.module.css';

const AnswerPhoto = (props) => {
  const [imageModal, setImageModal] = useState(false);
  const photo = props.link;

  return (
    <div className={style.column}>
      <img id={style.answerPhoto} src={photo} alt="answer photo" width="150px" height="150px" onClick={() => { setImageModal(!imageModal); }}></img>
      {imageModal ? <div><img className={style.modal} src={photo} alt="answer full-photo" onClick={() => { setImageModal(!imageModal); }}></img></div> : null}
    </div>
  );
};

export default AnswerPhoto;