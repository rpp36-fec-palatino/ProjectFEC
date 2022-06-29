import React from 'react';
import ReactDOM from 'react-dom';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';

class QuestionsAndAnswers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount () {

  }

  render () {
    return(
    <div>
      <h1>Questions And Answers</h1>
      <SearchQuestions/>
      <QuestionsList/>
      <button>More Answered Questions</button><button>Add a Question +</button>
    </div>
    )
  }
}


export default QuestionsAndAnswers;