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
      currentImg: this.props.productStyle.results[0].photos[0],
      currentImgSize: 'mainImageFit'
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.product.id !== this.state.productData.id) {
      this.setState({
        productData: this.props.product,
        currentImgSize: 'mainImageFit'
      });
    }
    if (this.props.productStyle.results.length !== 0 && this.props.productStyle.results[0].style_id !== this.state.styleData[0].style_id) {
      this.setState({
        styleData: this.props.productStyle.results,
        selectedData: this.props.productStyle.results[0],
        currentImg: this.props.productStyle.results[0].photos[0],
      });
    }
  }

  changeStyle (styleSelect) {
    this.state.styleData.forEach((style) => {
      if (style.style_id === parseInt(styleSelect)) {
        this.setState({selectedData: style, currentImg: style.photos[0], currentImgSize: 'mainImageFit'});
      }
    });
  }


  changeImage (event) {
    let selectedThumb = event.target.name;
    if (selectedThumb !== this.state.currentImg.url) {
      this.state.selectedData.photos.forEach((photo) => {
        if (selectedThumb === photo.url) {
          this.setState({currentImg: photo, currentImgSize: 'mainImageFit'});
        }
      });
    }
  }

  resize (event) {
    if (this.state.currentImgSize === 'mainImageFit') {
      this.setState({currentImgSize: 'mainImageExpand'});
    } else {
      this.setState({currentImgSize: 'mainImageFit'});
    }
  }

  render () {
    return (
      <div id='ProductOverview'>
        <div>Logo  _______ search bar</div>
        <div>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        <div className={css.topWindow}>
          <ErrorBoundary>
            <ImageGallery
              photos = {this.state.selectedData.photos}
              currentImg = {this.state.currentImg}
              currentImgSize = {this.state.currentImgSize}
              changeImage = {this.changeImage}
              resize = {this.resize}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <StyleSelector
              avgRating = {this.props.avgRating}
              numReviews = {this.props.numReviews}
              productData = {this.state.productData}
              styleData = {this.state.styleData}
              selectedData = {this.state.selectedData}
              changeStyle = {this.changeStyle}
              outfit = {this.props.outfit}
              modifyOutfit = {this.props.modifyOutfit}/>
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <ProductInformation
            productData = {this.state.productData}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default ProductOverview;

