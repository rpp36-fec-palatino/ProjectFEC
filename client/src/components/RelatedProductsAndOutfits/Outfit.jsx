import React from 'react';
import css from './styles.css';
import Stars from '../RatingsAndReviews/Stars.jsx';
import {FaRegTimesCircle} from 'react-icons/fa';
import WithTrackerHOC from '../../WithTrackerHOC.jsx';
import Wrapper from '../../Wrapper.jsx';


class Outfit extends React.Component {
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
      <WithTrackerHOC eventName={'RelatedProductsAndOutfits->Outfits'}>
        <Wrapper>
          <div id="Outfit">


            <div className="card-deck">

              <div className="card" onClick={() => this.props.modifyOutfit('add', this.props.currentId)}>
                <img className="card-img-top" src='/img/plus.png'></img>
                <div className="card-body">
                  <p className="card-category"><b><center>Add to Outfit</center></b></p>



                </div>
              </div>



              {this.props.outfits &&
              this.props.outfits.map(item => <div className="card" key={item}>
                <FaRegTimesCircle className="card-icon" onClick={() => this.props.modifyOutfit('remove', item)}/>
                <img className="card-img-top" src={this.props.outfitStyles[item].results[0].photos[0].thumbnail_url} alt="Card image cap"></img>
                <div className="card-body">
                  <p className="card-category">{this.props.outfit[item].category}</p>
                  <h5 className="card-name">{this.props.outfitStyles[item].results[0].name} {this.props.outfit[item].name}</h5>
                  {this.props.outfitStyles[item].results[0].sale_price === null ?
                    <h5 className="card-no-sale-price">${this.props.outfitStyles[item].results[0].original_price}</h5> : <h5 className="card-sale-price">${this.props.outfitStyles[item].results[0].sale_price}
                      <div className="card-original-price">${this.props.outfitStyles[item].results[0].original_price}</div>
                    </h5>
                  }

                  <Stars percent={Math.round((this.props.outfitRatings[item] / 5) * 100)}/>

                </div>
              </div>
              )}

            </div>

          </div>
        </Wrapper>
      </WithTrackerHOC>
    );
  }
}

export default Outfit;
