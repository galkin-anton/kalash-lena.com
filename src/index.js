import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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
    return <div>{this.state.currentTime}</div>;
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
        <h1 {...this.props}>
          Hello {this.props.frameworkName} World
        </h1>
    );
  }
}

class DateNow extends React.Component {
  render() {
    return <h1>Date time
      Now {new Date().toLocaleDateString()}
    </h1>;
  }
}

ReactDOM.render(
    <div>
      <HelloWorld
          id='ember'
          frameworkName='Ember.js'
          title='bla bla bla 1'/>
      <HelloWorld
          id='backbone'
          frameworkName='Backbone.js'
          title='bla bla bla 2'/>
      <HelloWorld
          id='angular'
          frameworkName='Angular.js'
          title='bla bla bla 3'/>
      <HelloWorld
          id='jquery'
          frameworkName='Лена Галкина!!'
          title='bla bla bla 4'/>
      <DateNow/>
      <Clock/>
      <button>ok</button>
    </div>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
