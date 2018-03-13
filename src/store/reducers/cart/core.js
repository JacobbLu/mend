'use strict';

import {Record, List} from 'immutable';
import {
  preCart,
  cart,
} from './model';

export const InitialState = Record({
  preCart: preCart,
  cart: cart
});
