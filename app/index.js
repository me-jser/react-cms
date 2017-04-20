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

import {Login} from './components/Login';
import {Reg} from './components/Reg';

import {
    Router, Route,browserHistory,Redirect
} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory} >
        <Redirect from="/" to="signIn" />
        <Route path="/signIn" component={Login}  />
        <Route path="/home" component={App}   />
        <Route path="/signUp" component={Reg} />
        <Route path="/addNewPost" component={PostPage} />
        <Route path="/modify:id" component={ModifyPost} />
    </Router>,
    document.querySelector('#app')
);

