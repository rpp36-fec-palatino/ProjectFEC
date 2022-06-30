import React from 'react';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div id='productInformation'>
        <div id='productInfoLeft'>
          <b>{this.props.productData.slogan}</b>
          <p>{this.props.productData.description}</p>
        </div>
        <div id='productInfoRight'>
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