import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router ,Route,Link, IndexRoute} from 'react-router-dom'
import Home from './components/home';

render(
    <Router>
            <Route  path='/' component={Home}></Route>
    </Router>,
document.querySelector('#box')
)