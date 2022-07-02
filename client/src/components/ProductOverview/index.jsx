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
      selectedData: exampleData.productStyle71697.results[0]
    };
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
          this.setState({selectedData: style});
        }
      });
    }
  }

  render () {
    return (
      <div>
        <div>Logo  _______ search bar</div>
        <div>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        <div className={css.topWindow}>
          <ImageGallery
            photos={this.state.selectedData.photos}/>
          <StyleSelector
            productData={this.state.productData}
            styleData={this.state.styleData}
            selectedData={this.state.selectedData}
            changeStyle={this.changeStyle.bind(this)}/>
        </div>
        <ProductInformation
          productData={this.state.productData}/>
      </div>
    );
  }
}

export default ProductOverview;

