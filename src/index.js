import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

require('bootstrap');

const App = lazy(() => import('./App'));
const renderLoader = () => <p>Loading</p>;

ReactDOM.render(
    <Suspense fallback={renderLoader()}>
      <App/>
    </Suspense>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
