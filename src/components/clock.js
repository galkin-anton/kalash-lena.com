import React from 'react';
import DigitalDisplay from './digital-display';
import AnalogDisplay from './analog-display';

class Clock extends React.Component {
  state = {
    currentTime: (new Date()),
  };

  constructor(props) {
    super(props);
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      //console.log('Udatimg time...');
      this.setState({
        currentTime: (new Date()),
      });
    }, 1000);
  }

  render() {
    //console.log('Rendering Clock...');
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay size={"large"} time={this.state.currentTime}/>
    </div>;
  }
}

export default Clock;