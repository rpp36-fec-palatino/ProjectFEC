import React from 'react';
import css from './styles/productInformation.module.css';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderFeatures = this.renderFeatures.bind(this);
  }

  renderFeatures (features) {
    debugger;
    let unique = {};
    return features.map((feature) => {
      if (!unique[feature.feature]) {
        unique[feature.feature] = true;
        if (feature.value) {
          return (
            <li key={feature.feature}><span>
              {feature.feature + ' : ' + feature.value}
            </span></li>
          );
        } else {
          return (
            <li key={feature.feature}><span>
              {feature.feature}
            </span></li>
          );
        }
      }
    });
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
            {this.renderFeatures(this.props.productData.features)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductInformation;