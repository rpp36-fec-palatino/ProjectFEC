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
import {sampleReviews71698, sampleMetaReview71698, emptyReviewsData, emptyReviewsMetaData} from '../../../../../sampleData/sampleReviewData.js';
import { server } from './mocks/server.js';
import helper from '../helperFns/helper.js';


/************  API tests setup**************************/
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());



// use describe, it pattern
describe('<RatingsAndReviews /> and its subcomponents rendering', () => {
  it('Renders <RatingsAndReviews /> component correctly', async () => {
    const passReviewCount = () => {};
    render(<RatingsAndReviews
      currentId = {71698}
      currentProductName = {'Bright Future Sunglasses'}
      passReviewCount = {passReviewCount}
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
    const passRatingFilter = () => {};
    const hasFilter = () => {};
    const removeFilterClick = () => {};
    render(<Ratings
      currentMetaReview = {sampleMetaReview71698}
      ratingObj = {sampleMetaReview71698.ratings}
      recommended = {sampleMetaReview71698.recommended}
      passRatingFilter = {passRatingFilter}
      hasFilter = {hasFilter}
      removeFilterClick = {removeFilterClick}


    />);
    expect(screen.findByText(/82% of reviews recommend this product/i)).toBeInTheDocument();
  });
  /*********** test modal pop *********************/

  // <ReviewsList
  //   currentReviews = {this.state.currentReviews}
  //   currentMetaReview = {this.state.currentMetaReview}
  //   currentDisplayReviews = {this.state.currentDisplayedReviews}
  //   addReview = {this.state.addReview}
  //   loadMore = {this.state.loadMore}
  //   clickLoadMoreBtn = {this.clickLoadMoreBtn.bind(this)}
  //   currentProductName = {this.props.currentProductName}
  //   currentProductId = {this.state.currentProductId}
  //   dropdownSelection = {this.selectOption.bind(this)}
  //   sortingKeyword = {this.state.sortingKeyword}
  //   passSearchKeyword = {this.passSearchKeyword.bind(this)}
  //   refresh={this.refresh.bind(this)}
  //   removeReportedReview = {this.removeReportedReview.bind(this)}


  // />;




  it('should render the add new review modal component if add new review button is clicked', () => {
    const mockOnClick = jest.fn();
    const {queryByText, getByTestId} = render(
      <ReviewsList
        currentReviews = {sampleReviews71698.results}
        currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}
        currentMeta = {sampleMetaReview71698} onClick = {mockOnClick()}

      />);
    const clickButton = getByTestId('popModal');
    fireEvent.click(clickButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('addNewModal').id).toBe('add-new-review-main');

  });


  //   ? <AddNewReviewModal
  //   currentName={this.props.currentProductName}
  //   handleCancelClick={this.handleCancelClick.bind(this)}
  //   currentMeta={this.props.currentMetaReview}
  //   currentProductId = {this.props.currentProductId}
  //   refresh = {this.props.refresh}
  // />



  /***********************************************/
  //            AddNewReviewModal test
  /***********************************************/

  describe('AddNewReviewModal component', () => {
    beforeEach(() => {
      const mockOnClick = jest.fn();
      const mockCancelClick = jest.fn();
      const mockRefresh = jest.fn();
      const {queryByText, getByTestId} = render(
        <AddNewReviewModal
          currentName = {'Bright Future Sunglasses'}
          handleCancelClick = {mockCancelClick()}
          currentMeta = {sampleMetaReview71698}
          currentProductId = {'71698'}
          onClick = {mockOnClick()}
          refresh = {mockRefresh()}

        />);

    });
    describe('Information display', () => {
      it('should render AddNewReview  modal and display correct product name and initial selection', () => {


        expect(screen.getByText(/Bright Future Sunglasses/i)).toBeInTheDocument();
        expect(screen.getByText(/no rating selected/i)).toBeInTheDocument();
        expect(screen.getByText(/none selected/i)).toBeInTheDocument();
      });

    });

  });















  /****** testing dropdown selection *************************/

  //default selection testing:
  it('should correctly set default option', () => {
    const dropdownSelection = (e) => {};
    const handleDropdownSelection = (e) => {};
    render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}
      dropdownSelection = {dropdownSelection}
      handleDropdownSelection = {handleDropdownSelection}

    />);
    expect(screen.getByRole('option', {name: 'Relevant'}).selected).toBe(true);
  });

  it('Should simulates selection', () => {
    const dropdownSelection = (e) => {};
    const handleDropdownSelection = (e) => {};
    const { getByTestId, getAllByTestId } = render(<ReviewsList
      currentReviews = {sampleReviews71698.results}
      currentDisplayReviews = {sampleReviews71698.results.slice(0, 2)}
      dropdownSelection = {dropdownSelection}
      handleDropdownSelection = {handleDropdownSelection}

    />);
    fireEvent.change(getByTestId('select'), { target: { value: 'newest' } });
    let option = getByTestId('select-newest');
    expect(option.selected).toBeTruthy();

    //...
  });


});


/***********************************************/
//             Test helper function
/***********************************************/

const emptyRatings = {};
const emptyRecommendations = {};
describe('helper function unit tests', () => {
  it('should calculate average rating', () => {
    expect(helper.avgStarScores(sampleMetaReview71698.ratings)).toBe(4.2);
    expect(helper.avgStarScores(emptyRatings)).toBe(0.0);
  });

  it('should calculate star ratings percentage', () => {
    expect(helper.ratingPercentage(sampleMetaReview71698.ratings)).toEqual({ '1': 0, '2': 9, '3': 18, '4': 18, '5': 55 });
    expect(helper.ratingPercentage(emptyRatings)).toEqual({'1': 0, '2': 0, '3': 0, '4': 0, '5': 0});
  });

  it('should calculate the recommendation rate', () => {
    expect(helper.recommendationRate(sampleMetaReview71698.recommended)).toBe(82);
    expect(helper.recommendationRate(emptyRecommendations)).toBe(0);
    expect(helper.recommendationRate({true: 0, false: 2})).toBe(0);
    expect(helper.recommendationRate({true: 2, false: 0})).toEqual(100);
  });
});

