import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class HelloWorld extends React.Component {
    render() {
        return (
                <h1 {...this.props}>
                    Hello {this.props.frameworkName} World
                </h1>
        )
    }
}

class DateTimeNow extends React.Component {
    render() {
        return <h1>Date time
            Now {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </h1>
    }
}

/*
ReactDOM.render(
        React.createElement('div',
                null,
                React.createElement(HelloWorld, {
                    id: "ember",
                    frameworkname: "Ember.js",
                    title: "bla bla bla 1"
                }),
                React.createElement(HelloWorld, {
                    id: "backbone",
                    frameworkname: "Backbone.js",
                    title: "bla bla bla 2"
                }),
                React.createElement('a', {href: 'http://node.university'},
                        'some'),
                React.createElement(HelloWorld, {
                    id: "angular",
                    frameworkname: "Angular.js",
                    title: "bla bla bla 3"
                })
        ),
        document.getElementById('root')
);
*/

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
            <DateTimeNow/>
        </div>,
        document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
