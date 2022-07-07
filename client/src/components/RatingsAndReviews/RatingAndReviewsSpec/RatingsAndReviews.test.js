/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsList from '../ReviewsList.jsx';
import Ratings from '../Ratings.jsx';
import {sampleReviews71698, sampleMetaReview71698} from '../../../../../sampleData/sampleReviewData.js';


// use describe, it pattern
describe('<RatingsAndReviews /> and its subcomponents rendering', () => {
  it('Renders <RatingsAndReviews /> component correctly', async () => {
    render(<RatingsAndReviews
      currentId = {71698}
    />);
    const title = await waitFor(() => screen.findByText(/Ratings and Reviews/i));
    expect (title).toBeInTheDocument();

  });
  it('Renders <ReviewsList /> component correctly', async () => {
    render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}

    />);
    expect(screen.getByText(/Reviews List/i)).toBeInTheDocument();
  });

  it('Renders <Ratings /> component correctly', async () => {
    render(<Ratings
      currentMetaReview = {sampleMetaReview71698}
      ratingObj = {sampleMetaReview71698.ratings}
      recommended = {sampleMetaReview71698.recommended}


    />);
    expect(screen.getByText(/Ranting Breakdown and Fitting stats/i)).toBeInTheDocument();
  });

});

