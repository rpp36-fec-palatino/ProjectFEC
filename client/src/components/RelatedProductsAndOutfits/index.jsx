import React from 'react';
import exampleData from './exampleData.js';
import RelatedProducts from './RelatedProducts.jsx';
import axios from 'axios';

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: exampleData.productList[0],
      // relatedProductsIds: exampleData.id71697Related,
      // relatedProducts: [],
      // outfit: []
    };
  }

  //can use ComponentDidMount after conditional render
  componentDidMount() {
  }


  render() {
    return (
      <div>
        RELATED PRODUCTS
        <RelatedProducts relatedProducts={this.props.relatedProducts}
          relatedProductsStyles={this.props.relatedProductsStyles}
          relatedProductsRatings={this.props.relatedProductsRatings}
          changeProduct={this.props.changeProduct}
        />
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;