'use strict';

const {
  UPDATE_PRE_CART,
  ADD_TO_CART_REQUEST,
  LOAD_CART_REQUEST,
} = require('../actionTypes').default;

export const updatePreCart = (payload) => ({
  type: UPDATE_PRE_CART,
  payload: payload,
});

export const addToCartRequest = (payload) => ({
  type: ADD_TO_CART_REQUEST,
  payload: payload,
});

export const loadCartRequest = (payload) => ({
  type: LOAD_CART_REQUEST,
  payload: payload,
})
