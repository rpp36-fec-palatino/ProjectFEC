import React from 'react';
import axios from 'axios';

class WithTrackerHOC extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {


  }


  onClick = (e) =>  {
    let result = {};
    var date = new Date();
    date.setTime(e.timeStamp);

    if (e.target.id ) {
      result.element = e.target.id;
    } else {
      result.element = e.currentTarget.id;
    }

    result.time = new Date().toLocaleString();
    result.widget = this.props.eventName;
    // console.log('e.currentTarget.id:', e.currentTarget.id);
    // console.log('e.target.id:', e.target.id);
    // console.log('event.target:', e.target);

    console.log(result);
    axios.post('/interactions', result)
      .then(response => {
        console.log('click interaction posted!');
      }).catch( err => {
        console.log('Err posting interactions', err);
      })


  }

  remapChildren(children) {
    const { onClick } = this;

    return React.Children.map(
      children,
      child => {
        if (typeof child.type === 'string') {
          return React.cloneElement(child, { onClick });
        } else if (React.Children.count(child.props.children)) {
          return React.cloneElement(child, {
            children: this.remapChildren(child.props.children)
          });
        }
      }
    );
  }

  render() {
    return this.remapChildren(this.props.children);
  }

}


export default WithTrackerHOC;