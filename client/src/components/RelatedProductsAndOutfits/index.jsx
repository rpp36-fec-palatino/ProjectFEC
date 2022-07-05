import React from 'react';
import exampleData from './exampleData.js';
import RelatedProducts from './RelatedProducts.jsx';

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: exampleData.productList[0],
      relatedProductsIds: exampleData.id71697Related,
      relatedProducts: [exampleData.productList[1], exampleData.productList[2], exampleData.productList[7], exampleData.productList[6]],
      outfit: []
    };
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <div>
        RELATED PRODUCTS
        <RelatedProducts relatedProducts={this.state.relatedProducts}/>
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;