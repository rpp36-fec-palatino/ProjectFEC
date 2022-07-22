import React from 'react';
import css from './styles/productInformation.module.css';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderFeatures = this.renderFeatures.bind(this);
  }

  renderFeatures (features) {
    let unique = {};
    return features.map((feature) => {
      if (!unique[feature.feature]) {
        unique[feature.feature] = true;
        if (feature.value) {
          return (
            <li key={feature.feature}><span id={'productFeature: ' + feature.feature}>
              {feature.feature + ' : ' + feature.value}
            </span></li>
          );
        } else {
          return (
            <li key={feature.feature}><span id={'productFeature: ' + feature.feature}>
              {feature.feature}
            </span></li>
          );
        }
      }
    });
  }

  render () {
    return (
      <WithTrackerHOC eventName={'ProductOverview->ProductInformation'}>
        <Wrapper>
          <div className={css.productInformation}>
            <div className={css.productInfoLeft}>
              <b id ='productSlogan' style={{fontSize: 'x-large'}}>{this.props.productData.slogan}</b>
              <p id ='productDescription'>{this.props.productData.description}</p>
            </div>
            <div className={css.productInfoRight}>
              <ul>
                {this.renderFeatures(this.props.productData.features)}
              </ul>
            </div>
          </div>
        </Wrapper>
      </WithTrackerHOC>
    );
  }
}

export default ProductInformation;