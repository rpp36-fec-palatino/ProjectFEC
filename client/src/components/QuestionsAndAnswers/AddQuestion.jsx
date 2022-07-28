import React from 'react';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';
import AddQuestionModal from './styles/AddQuestionModal.module.css';

const url = '/qa/questions';

const AddQuestion = (props) => {
  return (
    <div id="questionModal" className={AddQuestionModal.modalContainer}>
      Ask your question about the {props.productName}
      <form>
        <input type="hidden" id="product_id" name="product_id" value={props.product_id}></input>
        <label for="yourQuestion">Your Question*</label><br></br>
        <textarea name="body" id="body" rows="10" cols="30" maxLength = "1000" required></textarea><br></br>
        <label for="name">What is your nickname*</label><br></br>
        <input type="text" id="name" name ="name" placeholder="Example: jackson11!" maxLength= "60" required></input><br></br>
        <label for="email">Your email*</label><br></br>
        <input type="email" id="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="button" id="addQuestionSubmit" value="Submit" onClick={() => {
          var options = {
            // eslint-disable-next-line camelcase
            product_id: document.getElementById('product_id').value,
            body: document.getElementById('body').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
          };
          props.addQ(url, options);
          props.cancelButton();
        } }></input><button onClick={() => props.cancelButton()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddQuestion;