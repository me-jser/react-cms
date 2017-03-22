//var React = require('react');
//var Hello = require('./components/home.jsx');

import React from 'react';
import {Hello} from './components/home.jsx';
import ReactDOM from 'react-dom'

import './styles/sass/main'

ReactDOM.render(
    <Hello />,
    document.getElementById('container')
);