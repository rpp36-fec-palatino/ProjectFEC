import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import css from './styles/index.module.css';
import ErrorBoundary from '../../ErrorBoundary.jsx';
import exampleData from './exampleData.js';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: this.props.product,
      styleData: this.props.productStyle.results,
      selectedData: this.props.productStyle.results[0],
      currentImgIndex: 0,
      currentImg: this.props.productStyle.results[0].photos[0],
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.product.id !== this.state.productData.id) {
      this.setState({
        productData: this.props.product,
      });
    }
    let productStyleExist = this.props.productStyle.results.length !== 0;
    let productStyleChanged = this.props.productStyle.results[0].style_id !== this.state.styleData[0].style_id;
    if (productStyleExist && productStyleChanged) {
      this.setState({
        styleData: this.props.productStyle.results,
        selectedData: this.props.productStyle.results[0],
        currentImg: this.props.productStyle.results[0].photos[0],
        currentImgIndex: 0
      });
    }
  }

  changeStyle (styleSelect) {
    this.state.styleData.forEach((style) => {
      if (style.style_id === parseInt(styleSelect)) {
        if (style.photos.length > this.state.currentImgIndex) {
          this.setState({
            selectedData: style,
            currentImg: style.photos[this.state.currentImgIndex],
          });
        } else {
          this.setState({
            selectedData: style,
            currentImg: style.photos[0],
            currentImgIndex: 0,
          });
        }
        this.props.getProductStyleNumber(style.style_id);
      }
    });
  }

  changeImage (event, direction) {
    if (event) {
      let selectedThumb = event.target.name;
      if (selectedThumb !== this.state.currentImg.url) {
        this.state.selectedData.photos.forEach((photo, index) => {
          if (selectedThumb === photo.url) {
            this.setState({currentImg: photo, currentImgIndex: index});
          }
        });
      }
    } else {
      let currentImgIndex = this.state.currentImgIndex;
      if (direction === 'previous') {
        currentImgIndex--;
        let currentImg = this.state.selectedData.photos[currentImgIndex];
        this.setState({currentImgIndex, currentImg});
      } else if (direction === 'next') {
        currentImgIndex++;
        let currentImg = this.state.selectedData.photos[currentImgIndex];
        this.setState({currentImgIndex, currentImg});
      }
    }
  }

  render () {
    return (
      <div id='ProductOverview'>
        <div id='header' className={css.header}>
          <div>Logo  _______ search bar</div>
          <div>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        </div>
        <div id='topWindow' className={css.topWindow}>
          <ErrorBoundary>
            <ImageGallery
              photos = {this.state.selectedData.photos}
              currentImg = {this.state.currentImg}
              currentImgIndex = {this.state.currentImgIndex}
              changeImage = {this.changeImage}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <StyleSelector
              avgRating = {this.props.avgRating}
              reviewCount = {this.props.reviewCount}
              productData = {this.state.productData}
              styleData = {this.state.styleData}
              selectedData = {this.state.selectedData}
              changeStyle = {this.changeStyle}
              outfit = {this.props.outfit}
              modifyOutfit = {this.props.modifyOutfit}/>
          </ErrorBoundary>
        </div>
        <div id='bottomWindow' className={css.bottomWindow}>
          <ErrorBoundary>
            <ProductInformation
              productData = {this.state.productData}/>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default ProductOverview;

