'use strict';

const {
  UPDATE_PIXEL,
} = require('../actionTypes').default;

export const updatePixel = (payload) => ({
  type: UPDATE_PIXEL,
  payload: payload,
});
