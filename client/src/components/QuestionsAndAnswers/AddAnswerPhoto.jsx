import React from 'react';
import {useState} from 'react';
import style from './styles/AddAnswerModal.module.css';

const AddAnswerPhoto = (props) => {
  const photo = props.link;

  return (
    <div className={style.imageContainer} id="addAnswerPhoto">
      <img id={style.thumbnail} src={photo} alt="answer photo" width="75px" height="75px"></img>
    </div>
  );
};

export default AddAnswerPhoto;