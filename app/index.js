//var React = require('react');
//var Hello = require('./components/home.jsx');

import React from 'react';
import ReactDOM from 'react-dom'

import './styles/sass/main'
import './styles/lib/reset'
import './styles/sass/common/basicStyle'

import {App} from './components/App';
import {DashMenu} from './components/DashMenu';
import {DashOption} from './components/DashOption';
import {Posts} from './components/Posts';
import {PostPage} from './components/PostPage';
import {ModifyPost} from './components/ModifyPost';

import {
    Router, Route,browserHistory
} from 'react-router'


ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={App} />
        <Route path="/addNewPost" component={PostPage} />
        <Route path="/modify:id" component={ModifyPost} />
    </Router>,
    document.getElementById('container')
);