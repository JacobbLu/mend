'use strict';

import {combineEpics} from 'redux-observable';

import cart from './cart';

export default combineEpics(
  cart,
);
