import React from 'react';

class WithTrackerHOC extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = e => {
    let result = {};
    var date = new Date();
    date.setTime(e.timeStamp);
    // console.log(`[track click] ${this.props.eventName}`);
    // console.log(`[track timestamp] ${new Date().toLocaleString()}`);
    result.clickedComponent = this.props.eventName;
    result.element = e.currentTarget.id;
    result.timeStamp = new Date();
    console.log('e.currentTarget.id:', e.currentTarget.id)
    console.log('e.target.id:', e.target.id)

    console.log(result);
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