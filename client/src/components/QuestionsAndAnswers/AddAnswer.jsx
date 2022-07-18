import React from 'react';

import AddAnswerModal from './styles/AddAnswerModal.module.css';

const AddAnswer = (props) => {
  const addAnswerUrl = '/qa/questions' + props.questionId + '/answers';

  return (
    <div id="answerModal" className={AddAnswerModal.modal}>
      Submit your answer for {props.productName}: {props.questionBody}
      <form action={addAnswerUrl} medthod="POST">
        <input type="hidden" id="question_id" name="question_id" value={props.questionId}></input>
        <label for="yourAnswer">Your Answer*</label><br></br>
        <textarea name="body" rows="10" cols="30" maxLength="1000" required></textarea><br></br>
        <label for="name">What is your nickname*</label><br></br>
        <input type="text" id="name" name="name" placeholder="Example: jack543!" maxLength="60" required></input><br></br>
        <label for="email">Your email*</label><br></br>
        <input type="email" id="email" name="email" placeholder="Example: jack@email.com" maxLength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddAnswer;