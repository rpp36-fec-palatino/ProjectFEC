import React from 'react';
import style from './styles/AddAnswerModal.module.css';

const UploadPhotoModal = (props) => {
  return (
    <div className={style.modalUpload}>
      Upload your photos here. (limit 5 images)<br></br>
      <input type="file"></input><button onClick={e => {}}>Upload</button><button onClick={() => props.cancel()}>Cancel</button>
    </div>
  );
};

export default UploadPhotoModal;