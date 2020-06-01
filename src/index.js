import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap'
import Clock from './components/clock'
import Users from "./components/Users";
import * as serviceWorker from './serviceWorker';

require('bootstrap');

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
      <Users data-url={"data/users.json"}/>
    </div>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
