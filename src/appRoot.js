'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import ReactDOM from 'react-dom';

require('es6-promise').polyfill();
import 'isomorphic-fetch';

import {BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import configureStore from './store';
import Routes from './routes';

const browserHistory = createBrowserHistory({
  forceRefresh: true
})

const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
