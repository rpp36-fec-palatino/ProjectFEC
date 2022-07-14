import React from 'react';

import AddQuestionModal from './styles/AddQuestionModal.module.css';

const AddQuestion = (props) => {
  var addQuestionUrl = '/qa/questions';
  var options = {};

  var getQuestionInfo = () => {

  };

  return (
    <div id="questionModal" className={AddQuestionModal.modalContainer}>
      Ask your question about the {props.productName}
      <form action="/qa/questions" method="POST">
        <label for="yourQuestion">Your Question*</label><br></br>
        <textarea name="yourQuestion" rows="10" cols="30" maxLength = "1000" required></textarea><br></br>
        <label for="nickname">What is your nickname*</label><br></br>
        <input type="text" id="nickname" placeholder="Example: jackson11!" maxLength= "60" required></input><br></br>
        <label for="email">Your email*</label><br></br>
        <input type="email" id="email" name="email" placeholder="Why did you like the product or not?" maxLength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="submit" value="Submit"></input><button onClick={() => props.cancelButton()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddQuestion;