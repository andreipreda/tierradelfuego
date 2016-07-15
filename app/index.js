import 'babel-polyfill';
import 'whatwg-fetch';
import 'normalize.css';
import 'flexboxgrid';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './redux/root';

const target = document.getElementById('app');

ReactDOM.render(<Root />, target);
