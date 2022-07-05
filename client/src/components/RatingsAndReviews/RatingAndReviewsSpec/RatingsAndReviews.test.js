/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsList from '../ReviewsList.jsx';
import {sampleReviews71698} from '../../../../../sampleData/sampleReviewData.js';


// use describe, it pattern
describe('<RatingsAndReviews /> and its subcomponents rendering', () => {
  it('Renders <RatingsAndReviews /> component correctly', () => {
    const { getByText } = render(<RatingsAndReviews />);
    expect(getByText(/Ratings and Reviews/i)).toBeInTheDocument();
  });
  it('Renders <ReviewsList /> component correctly', () => {
    const { getByText } = render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}

    />);
    expect(getByText(/Reviews List/i)).toBeInTheDocument();
  });

});

