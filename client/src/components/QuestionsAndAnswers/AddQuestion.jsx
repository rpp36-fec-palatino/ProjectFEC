import React from 'react';

import AddQuestionModal from './styles/AddQuestionModal.module.css';

const AddQuestion = (props) => {
  return (
    <div id="questionModal" className={AddQuestionModal.modalContainer}>
      Ask your question about the {props.productName}
      <form action="/qa/questions" method="POST">
        <input type="hidden" id="product_id" name ="product_id" value={props.product_id}></input>
        <label for="yourQuestion">Your Question*</label><br></br>
        <textarea name="body" rows="10" cols="30" maxLength = "1000" required></textarea><br></br>
        <label for="name">What is your nickname*</label><br></br>
        <input type="text" id="name" name ="name" placeholder="Example: jackson11!" maxLength= "60" required></input><br></br>
        <label for="email">Your email*</label><br></br>
        <input type="email" id="email" name="email" placeholder="Why did you like the product or not?" maxLength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="submit" value="Submit"></input><button onClick={() => props.cancelButton()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddQuestion;