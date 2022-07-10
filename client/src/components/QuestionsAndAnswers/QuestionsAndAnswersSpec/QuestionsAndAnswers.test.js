/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
import QuestionsList from '../QuestionsList.jsx';
import sampleData from '../exampleData.js';

describe('questions and answers module and subcomponent rendering', () => {
  it('Renders QuestionsAndAnswers component', () => {
    render(<QuestionsAndAnswers questions={sampleData.questionsAndAnswers}/>);
    expect(screen.getByText(/Questions and Answers/i)).toBeInTheDocument();
  });
  // it('Renders Questions List component', () => {
  //   render(<QuestionsList />);
  //   expect(screen.getByText(/Add Answer/i)).toBeInTheDocument();
  // });
});