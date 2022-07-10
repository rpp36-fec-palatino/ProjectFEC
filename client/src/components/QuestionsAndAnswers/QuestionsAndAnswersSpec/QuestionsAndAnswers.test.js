/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
import QuestionsList from '../QuestionsList.jsx';
import SearchQuestions from '../SearchQuestions.jsx';
import sampleData from '../exampleData.js';

describe('questions and answers module and subcomponent rendering', () => {
  it('Renders QuestionsAndAnswers component', () => {
    render(<QuestionsAndAnswers questions={sampleData}/>);
    expect(screen.getByText(/Questions and Answers/i)).toBeInTheDocument();
  });
  it('Renders Questions List component', () => {
    render(<QuestionsList results={sampleData.results}/>);
    expect(screen.getByText(/Why is this product cheaper here than other sites?/i)).toBeInTheDocument();
  });
  it('Renders Questions Search bar', () => {
    render(<SearchQuestions/>);
    expect(screen.getByText(/Search Questions/i)).toBeInTheDocument();
  });
});