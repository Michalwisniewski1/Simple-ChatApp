import React from 'react';
import ReactDOM from 'react-dom';
import App from './Chat.jsx';
import Login from './Login.jsx';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>
            <Route path='/login' component={Contact}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);
