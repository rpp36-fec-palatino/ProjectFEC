import React from 'react';

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
    // console.log(`[track click] ${this.props.eventName}`);
    // console.log(`[track timestamp] ${new Date().toLocaleString()}`);
    result.clickedComponent = this.props.eventName.split('-')[0];
    result.level = this.props.eventName.split('-')[2];
    if (e.target.id ) {
      result.element = e.target.id;
    } else {
      result.element = e.currentTarget.id;
    }

    result.timeStamp = new Date().toLocaleString();
    // console.log('e.currentTarget.id:', e.currentTarget.id);
    // console.log('e.target.id:', e.target.id);
    // console.log('event.target:', e.target);
    let clickStorage = localStorage.clicks;
    // console.log('clickStorage:', typeof(clickStorage));
    let record = JSON.parse(clickStorage);
    record.push(result);
    let lvl2 = record.filter(ele => ele.level === '2');
    // console.log('These are level2:',lvl2);
    if(lvl2.length) {
      for(let i = 0; i < lvl2.length; i++) {
        let dupTimestamp = lvl2[i].timeStamp;
        record = record.filter(ele => (!(ele.timeStamp === dupTimestamp && ele.level === '1')))

      }

    }




    localStorage.setItem('clicks', JSON.stringify(record));


    // console.log(result);
    console.log(localStorage.clicks);
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