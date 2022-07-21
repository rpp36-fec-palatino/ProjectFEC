import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import {sampleReviews71697, sampleReviews71698, sampleMetaReview71698, sampleMetaReview71697 } from '../../../../sampleData/sampleReviewData.js';
import ReviewsMainCSS from './cssModule_Reviews/ReviewsMain.module.css';
import axios from 'axios';




class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 0,
      loadMore: true,
      hasFilter: false,
      currentReviews: [],
      currentReviewCount: 0,
      currentDisplayedReviews: [],
      currentMetaReview: sampleMetaReview71697, //default
      // ratingObj: {'5': '0', '4': '0', '3': '0', '2': '0', '1': '0'},
      ratingObj: sampleMetaReview71697['ratings'],
      // recommended: {'false': '0', 'true': '0' },
      recommended: sampleMetaReview71697['recommended'],
      sortingKeyword: 'relevant', //default
      ratingFilters: {'5': false, '4': false, '3': false, '2': false, '1': false}



    };
  }

  componentDidMount () {

    this.setState({
      currentProductId: this.props.currentId

    });
    this.displayCurrentProductReviews(this.props.currentId);
    this.displayCurrentProductReviewsMeta(this.props.currentId);

  }

  componentDidUpdate(prevProps, prevState) {
    //only change content if corresponding product id changes
    if (this.props. currentId !== prevProps.currentId) {
      this.componentDidMount();

    }
    if (this.state.sortingKeyword !== prevState.sortingKeyword) {
      this.displayCurrentProductReviews(this.props.currentId);
      this.setState({loadMore: true});

    }
    if (this.state.currentReviewCount !== prevState.currentReviewCount) {
      this.props.passReviewCount(this.state.currentReviewCount);

    }
    if (this.state.ratingFilters !== prevState.ratingFilters) {
      this.displayRatingFilteredReviews(this.state.ratingFilters);
    }


  }



  displayCurrentProductReviews(currentId) {
    axios.get(`/reviews?sort=${this.state.sortingKeyword}&count=100&product_id=${currentId}`)
      .then(response => {

        this.setState({
          allReviews: response.data.results,
          currentReviews: response.data.results,
          currentReviewCount: response.data.results.length,
          currentDisplayedReviews: response.data.results.slice(0, 2)

        });

      }).catch(err => console.log('Err display reviews!', err));

  }


  displayCurrentProductReviewsMeta(currentId) {
    axios.get(`/products/${currentId}/reviews/meta`)
      .then(response => {
        this.setState({
          currentMetaReview: response.data,
          ratingObj: response.data.ratings,
          recommended: response.data.recommended
        });

      }).catch(err => console.log('Err display meta reviews!', err));

  }


  clickLoadMoreBtn(e) {
    let curDisplays = this.state.currentDisplayedReviews;
    let allReviews = this.state.currentReviews;
    if (curDisplays.length < allReviews.length - 2) {
      let i = curDisplays.length;
      this.setState({
        currentDisplayedReviews: allReviews.slice(0, i + 2),

      });

    } else {
      this.setState({
        currentDisplayedReviews: allReviews,
        loadMore: false

      });
    }

  }

  selectOption(e) {
    this.setState({sortingKeyword: e.target.value });

  }

  passRatingFilter(filterState) {
    console.log('this is the filter state:', filterState);
    this.setState({ratingFilters: filterState});
  }

  displayRatingFilteredReviews (currentFiltersObj) {
    let values = Object.values(currentFiltersObj);
    let allReviews = this.state.allReviews;
    if (values.includes(true)) {

      let filtered = [];
      for (let key in currentFiltersObj) {
        if (currentFiltersObj[key] === true) {
          let curFiltered = allReviews.filter(ele => ele.rating === Number(key));
          filtered = filtered.concat(curFiltered);
          console.log('filtered:', filtered);
          this.setState({
            hasFilter: true,
            currentReviews: filtered,
            currentDisplayedReviews: filtered.slice(0, 2),
            loadMore: true});

        }
      }



    } else {
      this.displayCurrentProductReviews(this.props.currentId);
      this.setState({loadMore: true, hasFilter: false});
    }


  }

  removeFilterClick(e) {
    e.preventDefault();
    this.setState({
      hasFilter: false,
      ratingFilters: {'5': false, '4': false, '3': false, '2': false, '1': false}

    });
  }




  render () {
    return (
      <div id="RatingsAndReviews">
        <h1>Ratings and Reviews</h1>
        <div className={ReviewsMainCSS.box}>
          <Ratings
            currentMetaReview = {this.state.currentMetaReview}
            ratingObj = {this.state.ratingObj}
            recommended = {this.state.recommended}
            passRatingFilter = {this.passRatingFilter.bind(this)}
            hasFilter = {this.state.hasFilter}
            removeFilterClick = {this.removeFilterClick.bind(this)}
          />

          <ReviewsList
            currentReviews = {this.state.currentReviews}
            currentMetaReview = {this.state.currentMetaReview}
            currentDisplayReviews = {this.state.currentDisplayedReviews}
            addReview = {this.state.addReview}
            loadMore = {this.state.loadMore}
            clickLoadMoreBtn = {this.clickLoadMoreBtn.bind(this)}
            currentProductName = {this.props.currentProductName}
            dropdownSelection = {this.selectOption.bind(this)}
            sortingKeyword = {this.state.sortingKeyword}


          />


        </div>

      </div>
    );
  }
}

export default RatingsAndReviews;