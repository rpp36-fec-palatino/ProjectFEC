/**
 * @jest-environment jsdom
 */
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { fireEvent} from '@testing-library/react';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsList from '../ReviewsList.jsx';
import Ratings from '../Ratings.jsx';
import AddNewReviewModal from '../AddNewReviewModal.jsx';
import {sampleReviews71698, sampleMetaReview71698} from '../../../../../sampleData/sampleReviewData.js';
import { server } from './mocks/server.js';


/************  API tests setup**************************/
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


// use describe, it pattern
describe('<RatingsAndReviews /> and its subcomponents rendering', () => {
  it('Renders <RatingsAndReviews /> component correctly', async () => {
    render(<RatingsAndReviews
      currentId = {71698}
    />);
    const title = await waitFor(() => screen.findByText(/Ratings and Reviews/i));
    expect (title).toBeInTheDocument();

  });
  it('Renders <ReviewsList /> component correctly', () => {
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
    expect(screen.findByText(/82% of reviews recommend this product/i)).toBeInTheDocument();
  });
  /*********** test modal pop *********************/

  it('should render the add new review modal component if add new review button is clicked', () => {
    const mockOnClick = jest.fn();
    const {queryByText, getByTestId} = render(<ReviewsList currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)} currentMeta = {sampleMetaReview71698} onClick = {mockOnClick()}/>);
    const clickButton = getByTestId('popModal');
    fireEvent.click(clickButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('addNewModal').id).toBe('add-new-review-title');
  });


  it('should render upload images modal component if corresponding button is clicked', () => {
    const mockOnClick = jest.fn();
    const {queryByText, getByTestId} = render(<AddNewReviewModal currentMeta = {sampleMetaReview71698} onClick = {mockOnClick()}/>);
    const clickButton1 = getByTestId('popUploadImg');
    fireEvent.click(clickButton1);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('uploadImg').id).toBe('uploadImgModal');
  });

  /****** testing dropdown selection *************************/

  //default selection testing:
  it('should correctly set default option', () => {
    render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}

    />);
    expect(screen.getByRole('option', {name: 'Relevant'}).selected).toBe(true);
  });

  it('Should simulates selection', () => {
    const { getByTestId, getAllByTestId } = render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}

    />);
    fireEvent.change(getByTestId('select'), { target: { value: 'newest' } });
    let option = getByTestId('select-newest');
    expect(option.selected).toBeTruthy();

    //...
  });


});






