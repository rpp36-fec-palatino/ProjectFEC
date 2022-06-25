import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    return (
    <div>
      <div>Logo  _______ search bar</div>
      <div>SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
      <div id="productpage">
        <ImageGallery />
        <ProductInformation />
      </div>
      <div id="productstyle">
        <StyleSelector />
        <AddToCart />
      </div>
    </div>

    )
  }
}

export default ProductOverview;

