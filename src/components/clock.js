import React from 'react';
import DigitalDisplay from './digital-display';

class Clock extends React.Component {
  state = {
    currentTime: (new Date()).toLocaleString(),
  };

  constructor(props) {
    super(props);
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      console.log('Udatimg time...');
      this.setState({
        currentTime: (new Date()).toLocaleString(),
      });
    }, 1000);
  }

  render() {
    console.log('Rendering Clock...');
    return <div>
      <DigitalDisplay size={"large"} time={this.state.currentTime}/>
    </div>;
  }
}

export default Clock;