import React from 'react';
import css from './styles.css';
import Stars from '../RatingsAndReviews/Stars.jsx';
import {FaRegStar} from 'react-icons/fa';
import PopUp from './PopUp.jsx';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      relatedProduct: {}
    };
  }

  componentDidMount() {
    // console.log('related props', this.props);
  }

  openPopup(event) {
    if (!this.state.popup) {
      this.setState({popup: true, relatedProduct: event});
    }
  }

  closePopup() {
    this.setState({popup: false});
  }

  render() {

    return (
      <WithTrackerHOC eventName={'RelatedProductsAndOutfits->RelatedProducts'}>
        <Wrapper>
          <div id="RelatedProduct">


            <div className="card-deck">


              {this.props.relatedProducts &&
              this.props.relatedProducts.map(relatedProduct => <div className="card" key={relatedProduct.id}>
                <FaRegStar className="card-icon" onClick={() => this.openPopup(relatedProduct)}/>
                <img className="card-img-top"
                  src={this.props.relatedProductsStyles[relatedProduct.id].photos[0].thumbnail_url}
                  alt="Card image cap"
                  onClick={() => this.props.changeProduct(relatedProduct.id)}></img>
                <div className="card-body" onClick={() => this.props.changeProduct(relatedProduct.id)}>
                  <p className="card-category">{relatedProduct.category}</p>
                  <h5 className="card-name">{this.props.relatedProductsStyles[relatedProduct.id].name} {relatedProduct.name}</h5>
                  {this.props.relatedProductsStyles[relatedProduct.id].sale_price === null ?
                    <h5 className="card-no-sale-price">${this.props.relatedProductsStyles[relatedProduct.id].original_price}</h5> : <h5 className="card-sale-price">${this.props.relatedProductsStyles[relatedProduct.id].sale_price}
                      <div className="card-original-price">${this.props.relatedProductsStyles[relatedProduct.id].original_price}</div>
                    </h5>
                  }

                  <Stars percent={Math.round((this.props.relatedProductsRatings[relatedProduct.id] / 5) * 100)}/>

                </div>
              </div>
              )}


            </div>
            {this.state.popup ? <PopUp
              currentProduct={this.props.product}
              relatedProduct={this.state.relatedProduct}
              closePopup={this.closePopup.bind(this)}
            /> : null}
          </div>
        </Wrapper>
      </WithTrackerHOC>
    );
  }
}

export default RelatedProducts;
