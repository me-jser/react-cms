//var React = require('react');
//var Hello = require('./components/home.jsx');

import React from 'react';
import ReactDOM from 'react-dom'

import './styles/sass/main'
import './styles/lib/reset'
import './styles/sass/common/basicStyle'
import './styles/images/importImg'

import {App} from './components/App';



ReactDOM.render(
    <App />,
    document.getElementById('container')
);