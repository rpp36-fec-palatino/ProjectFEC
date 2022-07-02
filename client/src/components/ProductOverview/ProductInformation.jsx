import React from 'react';
import css from './styles/productInformation.module.css';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className={css.productInformation}>
        <div className={css.productInfoLeft}>
          <b>{this.props.productData.slogan}</b>
          <p>{this.props.productData.description}</p>
        </div>
        <div className={css.productInfoRight}>
          <ul>
            {this.props.productData.features.map((feature) =>
              <li key={feature.feature}>
                {feature.feature + ' : ' + feature.value}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductInformation;