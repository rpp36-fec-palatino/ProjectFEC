import React from 'react';
import ReactDOM from 'react-dom';
import exampleData from './exampleData.js';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import css from './styles/index.module.css';


class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: exampleData.product71697,
      styleData: exampleData.productStyle71697.results,
      selectedData: exampleData.productStyle71697.results[0],
      currentImg: exampleData.productStyle71697.results[0].photos[0],
      currentImgSize: 'mainImageFit',
    };
    this.changeStyle = this.changeStyle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount () {
    this.changeStyle();
  }

  changeStyle (styleSelect) {
    if (styleSelect === undefined) {
      this.state.styleData.forEach((style) => {
        if (style['default?'] === true) {
          this.setState({selectedData: style});
        }
      });
    } else {
      this.state.styleData.forEach((style) => {
        if (style.style_id === parseInt(styleSelect)) {
          this.setState({selectedData: style, currentImg: style.photos[0], currentImgSize: 'mainImageFit'});
        }
      });
    }
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
          <ImageGallery
            photos = {this.state.selectedData.photos}
            currentImg = {this.state.currentImg}
            currentImgSize = {this.state.currentImgSize}
            changeImage = {this.changeImage}
            resize = {this.resize}/>
          <StyleSelector
            productData = {this.state.productData}
            styleData = {this.state.styleData}
            selectedData = {this.state.selectedData}
            changeStyle = {this.changeStyle}/>
        </div>
        <ProductInformation
          productData = {this.state.productData}/>
      </div>
    );
  }
}

export default ProductOverview;

