import  React from 'react';
import { Router, Route, Link, history } from 'react-router'

import {Container} from '../components/Container';
import {PostPage} from '../components/PostPage';

module.exports = (
    <Router>
        <Route path="/" component={Container} />
    </Router>
);


