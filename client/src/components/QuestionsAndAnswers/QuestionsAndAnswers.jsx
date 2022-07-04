import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import style from './styles/QuestionsAndAnswers.module.css';

import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import questionsAndAnswers from './exampleData.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line camelcase
      product_id: questionsAndAnswers.product_id,
      results: questionsAndAnswers.results,
      numberResults: 2,
      currentResults: questionsAndAnswers.results.slice(0, 2)
    };
    this.totalResults = questionsAndAnswers.results.length;
    this.loadQuestions = this.loadQuestions.bind(this);
  }


  componentDidMount () {

  }

  loadQuestions () {
    if (this.state.numberResults < this.totalResults) {
      var newNumberResults = this.state.numberResults + 1;
      var newResults = this.state.results.slice(0, newNumberResults);
      this.setState({numberResults: newNumberResults,
        currentResults: newResults
      });
    }
  }

  loadQuestionsButton () {
    if (this.state.numberResults === this.totalResults) {
      return null;
    }
    return (
      <button onClick={() => this.loadQuestions()}>More Answered Questions</button>
    );
  }

  render () {
    return (
      <div className={style.questionsAndAnswers}>
        <h1>Questions And Answers</h1>
        <SearchQuestions/>
        <QuestionsList results={this.state.currentResults}/>
        {this.loadQuestionsButton()}<button>Add a Question +</button>
      </div>
    );
  }
}


export default QuestionsAndAnswers;