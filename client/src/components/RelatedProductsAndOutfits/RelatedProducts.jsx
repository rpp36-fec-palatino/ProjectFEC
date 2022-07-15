import React from 'react';
import css from './styles.css';
import Stars from '../RatingsAndReviews/Stars.jsx';


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {

    return (
      <div>


        <div className="card-deck">


          {this.props.relatedProducts.map(relatedProduct => <div className="card" key={relatedProduct.id} onClick={() => this.props.changeProduct(relatedProduct.id)}>
            <img className="card-img-top" src={this.props.relatedProductsStyles[relatedProduct.id].photos[0].thumbnail_url} alt="Card image cap"></img>
            <div className="card-body">
              <p className="card-category">{relatedProduct.category}</p>
              <h5 className="card-name">{this.props.relatedProductsStyles[relatedProduct.id].name} {relatedProduct.name}</h5>
              {this.props.relatedProductsStyles[relatedProduct.id].sale_price === null ?
                <h5 className="card-no-sale-price">${this.props.relatedProductsStyles[relatedProduct.id].original_price}</h5>
                : <h5 className="card-sale-price">${this.props.relatedProductsStyles[relatedProduct.id].sale_price}
                  <div className="card-original-price">${this.props.relatedProductsStyles[relatedProduct.id].original_price}</div>
                </h5>
              }

              <Stars percent={Math.round((this.props.relatedProductsRatings[relatedProduct.id] / 5) * 100)}/>

            </div>
          </div>
          )}


        </div>

      </div>
    );
  }
}

export default RelatedProducts;