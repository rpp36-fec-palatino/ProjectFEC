/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('questions and answers module and subcomponent rendering', () => {
  it('Renders ProductOverview component', () => {
    render(<QuestionsAndAnswers questions={sampleData}/>);
    expect(screen.getByText(/Questions and Answers/i)).toBeInTheDocument();
  });

});