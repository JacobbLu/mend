'use strict';
import {List} from 'immutable';
import * as core from './core';

const {
  UPDATE_PRE_CART,
  LOAD_CART_SUCCESS,
} = require('../../actionTypes').default;

const initialState = core.InitialState();

export default function (state = initialState, {type, payload}) {
  switch (type) {

    case UPDATE_PRE_CART:
      return state.set('preCart', List(payload));

    case LOAD_CART_SUCCESS:
      return state.set('cart', List(payload));

  };
  return state;
}
