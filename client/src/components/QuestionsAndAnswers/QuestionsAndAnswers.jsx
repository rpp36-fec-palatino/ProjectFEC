import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'underscore';

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
      addQuestionForm: false,
      searchInput: ''
    };
    this.loadQuestions = this.loadQuestions.bind(this);
    this.handleAddQuestionCancel = this.handleAddQuestionCancel.bind(this);
    this.debounceSearch = _.debounce((e) => { this.setState({searchInput: e.target.value}); this.filterResults(e.target.value); }, 300);
  }

  componentDidUpdate (previousProps, previousState) {
    if (this.props.questions.product_id !== this.state.product_id || this.props.questions.results !== this.state.results) {
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

  filterResults (term) {
    if (term.length > 2) {
      console.log('searching', term);
      var regex = new RegExp('\\b' + term + '\\b');
      var matched = [];
      this.state.results.forEach((item) => {
        matched.push(item.question_body.match(regex));
      });
      console.log(matched);
    } else {
      this.setState ({
        results: questionsAndAnswers.results
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

  addQuestionButton (url, options) {
    axios.post(url, options)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  debounceSearch(e) {
    this.debounceSearch(e);
  }

  onSearchInput(e) {
    e.persist();
    this.debounceSearch(e);
  }

  render () {
    if (this.state.totalResults === 0) {
      return (
        <div className={style.questionsAndAnswers}>
          <h1>Questions And Answers</h1>
          <h3>No questions have been asked. Feel free to add a question</h3>
          <button onClick={this.handleAddQuestionClick.bind(this)}>Add a Question +</button>
          {this.state.addQuestionForm ? <AddQuestion productName={this.props.productName} product_id={this.state.product_id} cancelButton={this.handleAddQuestionCancel}/> : null}
        </div>
      );
    }
    return (
      <div className={style.questionsAndAnswers}>
        <h1>Questions And Answers</h1>
        <SearchQuestions onSearch={this.onSearchInput.bind(this)}/>
        <QuestionsList results={this.state.currentResults} helpfulQ={this.helpfulQuestionButton} productName={this.props.productName}/>
        {this.loadQuestionsButton()}<button onClick={this.handleAddQuestionClick.bind(this)}>Add a Question +</button>
        {this.state.addQuestionForm ? <AddQuestion productName={this.props.productName} product_id={this.state.product_id} cancelButton={this.handleAddQuestionCancel}/> : null}
      </div>
    );
  }
}


export default QuestionsAndAnswers;