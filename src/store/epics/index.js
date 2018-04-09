'use strict';

import {combineEpics} from 'redux-observable';

import cart from './cart';
import gallery from './gallery';

export default combineEpics(
  cart,
  gallery,
);
