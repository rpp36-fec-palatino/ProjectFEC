import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import style from './styles/QuestionsAndAnswers.module.css';

import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import questionsAndAnswers from './exampleData.js';
import AddQuestion from './AddQuestion.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line camelcase
      product_id: props.questions.product_id,
      results: questionsAndAnswers.results,
      numberResults: 2,
      totalResults: 4,
      currentResults: questionsAndAnswers.results.slice(0, 2),
      addQuestionForm: false
    };
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  componentDidUpdate (previousProps, previousState) {
    console.log('qa componenet', this.props.questions, this.state.product_id);
    if (this.props.questions.product_id !== this.state.product_id) {
      this.setState({
        // eslint-disable-next-line camelcase
        product_id: this.props.questions.product_id,
        results: this.props.questions.results,
        numberResults: 2,
        totalResults: this.props.questions.results.length,
        currentResults: this.props.questions.results.slice(0, 2)
      });
    }
  }

  loadQuestions () {
    if (this.state.numberResults < this.state.totalResults) {
      var newNumberResults = this.state.numberResults + 1;
      var newResults = this.state.results.slice(0, newNumberResults);
      this.setState({numberResults: newNumberResults,
        currentResults: newResults
      });
    }
  }

  loadQuestionsButton () {
    if (this.state.numberResults === this.state.totalResults) {
      return null;
    }
    return (
      <button onClick={() => this.loadQuestions()}>More Answered Questions</button>
    );
  }

  helpfulQuestionButton (url) {
    axios.put(url)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleAddQuestionClick(e) {
    this.setState({
      addQuestionForm: true
    });
  }

  handleAddQuestionCancel(e) {
    this.setState({
      addQuestionForm: false
    });
  }

  render () {
    return (
      <div className={style.questionsAndAnswers}>
        <h1>Questions And Answers</h1>
        <SearchQuestions/>
        <QuestionsList results={this.state.currentResults} helpfulQ={this.helpfulQuestionButton}/>
        {this.loadQuestionsButton()}<button onClick={this.handleAddQuestionClick.bind(this)}>Add a Question +</button>
        {this.state.addQuestionForm ? <AddQuestion productName={this.props.productName}/> : null}
      </div>
    );
  }
}


export default QuestionsAndAnswers;