import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'startbootstrap-clean-blog/css/clean-blog.css';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap/dist/js/bootstrap.bundle.min.js');
require('jquery-easing');
require('startbootstrap-clean-blog/js/clean-blog.min');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

