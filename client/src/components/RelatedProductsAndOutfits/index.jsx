import React from 'react';
import exampleData from './exampleData.js';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';
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
        YOUR OUTFIT
        <Outfit
          currentId={this.props.currentId}
          outfits={this.props.outfits}
          outfit={this.props.outfit}
          outfitStyles={this.props.outfitStyles}
          outfitRatings={this.props.outfitRatings}
          modifyOutfit={this.props.modifyOutfit}
        />
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;