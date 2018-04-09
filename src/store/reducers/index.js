'use strict';

import {combineReducers} from 'redux-immutable';

import board from './board';
import cart from './cart';
import gallery from './gallery';

export default combineReducers({
  board,
  cart,
  gallery,
});
