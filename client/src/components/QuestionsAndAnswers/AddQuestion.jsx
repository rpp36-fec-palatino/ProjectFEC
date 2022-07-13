import React from 'react';

const AddQuestion = (props) => {
  return (
    <div id="questionModal" class="modal">
      Ask your question about the {props.productName}
      <form action="">
        <label for="yourQuestion">Your Question*</label><br></br>
        <textarea name="yourQuestion" rows="10" cols="30" maxlength = "1000" required></textarea><br></br>
        <label for="nickname">What is your nickname*</label><br></br>
        <input type="text" id="nickname" placeholder="Example: jackson11!" maxlength= "60" required></input><br></br>
        <label for="email">Your email*</label><br></br>
        <input type="email" id="email" name="email" placeholder="Why did you like the product or not?" maxlength="60" required></input><br></br>
        <label for="email">For authentication reasons, you will not be emailed</label><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddQuestion;