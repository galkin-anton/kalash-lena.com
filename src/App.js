import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap'
import Users from "./components/Users";
import SaveButton from "./components/SaveButton";
import Clock from "./components/clock";

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


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App = (props) => {
  return <div className="application">
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
    <SaveButton/>
    <Users data-url={"data/users.json"}/>
  </div>
}

export default App;
