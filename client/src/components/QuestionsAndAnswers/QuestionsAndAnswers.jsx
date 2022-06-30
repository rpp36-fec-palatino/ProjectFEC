import React from 'react';
import ReactDOM from 'react-dom';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import questionsAndAnswers from './exampleData.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line camelcase
      product_id: questionsAndAnswers.product_id,
      results: questionsAndAnswers.results
    };
  }


  componentDidMount () {

  }

  render () {
    return (
      <div>
        <h1>Questions And Answers</h1>
        <SearchQuestions/>
        <QuestionsList results={this.state.results}/>
        <button>More Answered Questions</button><button>Add a Question +</button>
      </div>
    );
  }
}


export default QuestionsAndAnswers;