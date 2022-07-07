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
      relatedProducts: [],
      outfit: []
    };
  }

  componentDidMount() {
    let id = this.props.currentId;
    let url = `/products/${id}/related`;
    var relatedProducts = [];

    axios.get(url)
      .then(result => {
        // this.setState({realtedProducts: result.data});

        for (var i = 0; i < result.data.length; i++) {
          var url = `/products/${result.data[i]}`;
          axios.get(url)
            .then(result => {
              relatedProducts.push(result.data);
            });
        }
        this.setState({realtedProducts: [...relatedProducts]});


      });
  }

  render() {
    return (
      <div>
        RELATED PRODUCTS
        <RelatedProducts /*relatedProducts={this.state.relatedProducts}*//>
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;