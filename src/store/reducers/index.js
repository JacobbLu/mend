'use strict';

import {combineReducers} from 'redux-immutable';

import board from './board';
import cart from './cart';

export default combineReducers({
  board,
  cart,
});
