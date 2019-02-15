import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import { Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';

const history = createHistory()
ReactGA.initialize('UA-107272376-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

ReactDOM.render(<Router  history={history}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
