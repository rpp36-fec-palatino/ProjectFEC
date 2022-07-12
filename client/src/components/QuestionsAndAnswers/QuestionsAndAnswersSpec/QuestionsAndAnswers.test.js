/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
import QuestionsList from '../QuestionsList.jsx';
import Question from '../Question.jsx';
import SearchQuestions from '../SearchQuestions.jsx';
import Answer from '../Answer.jsx';
import AnswerPhoto from '../AnswerPhoto.jsx';
import sampleData from '../exampleData.js';

describe('questions and answers module and subcomponent rendering', () => {
  it('Renders QuestionsAndAnswers component', () => {
    render(<QuestionsAndAnswers questions={sampleData}/>);
    expect(screen.getByText(/Questions and Answers/i)).toBeInTheDocument();
  });
  it('Renders loadQuestionsButton when more than 2 questions', () => {
    render(<QuestionsAndAnswers questions={sampleData}/>);
    expect(screen.getByText(/More Answered Questions/i)).toBeInTheDocument();
  });
  it('Renders Questions List component', () => {
    render(<QuestionsList results={sampleData.results}/>);
    expect(screen.getByText(/Why is this product cheaper here than other sites?/i)).toBeInTheDocument();
  });
  it('Renders Questions Search bar', () => {
    render(<SearchQuestions/>);
    expect(screen.getByText(/Search Questions/i)).toBeInTheDocument();
  });
  it('Renders Answer component', () => {
    render(<Answer key={sampleData.results.question_id} answer={sampleData.results[1].answers['5986058']}/>);
    expect(screen.getByText(/Report/i)).toBeInTheDocument();
  });
});