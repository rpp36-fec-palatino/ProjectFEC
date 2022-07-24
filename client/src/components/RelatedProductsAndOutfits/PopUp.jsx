import React from 'react';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';


class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {}
    };
  }

  componentDidMount() {

    var featuresObj = {};
    for (var i = 0; i < this.props.currentProduct.features.length; i++) {
      featuresObj[this.props.currentProduct.features[i].feature] = [this.props.currentProduct.features[i].value, ''];
    }
    for (var j = 0; j < this.props.relatedProduct.features.length; j++) {
      if (Object.keys(featuresObj).includes(this.props.relatedProduct.features[j].feature)) {
        featuresObj[this.props.relatedProduct.features[j].feature][1] = this.props.relatedProduct.features[j].value;
      } else {
        featuresObj[this.props.relatedProduct.features[j].feature] = ['', this.props.relatedProduct.features[j].value];
      }
    }

    this.setState({features: featuresObj});
  }

  render() {

    return (
      <WithTrackerHOC eventName={'RelatedProductsAndOutfits->Popup'}>
        <Wrapper>
          <div className="popup-box" id="Popup">

            <div className="box">

              <div>Comparing</div>
              <button className="btn-close" onClick={() => this.props.closePopup()}>X</button>
              <table>
                <tr>
                  <th>{this.props.currentProduct.name}</th>
                  <th></th>
                  <th className="right-col">{this.props.relatedProduct.name}</th>
                </tr>

                {Object.keys(this.state.features).map(value =>
                  <tr key={value}>
                    <td>{this.state.features[value][0]}</td>
                    <td><i>{value}</i></td>
                    <td className="right-col">{this.state.features[value][1]}</td>
                  </tr>
                )}
              </table>

            </div>
          </div>
        </Wrapper>
      </WithTrackerHOC>
    );
  }
}

export default PopUp;
