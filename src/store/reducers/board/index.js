'use strict';
import {List} from 'immutable';
import * as core from './core';

const {
  UPDATE_PIXEL,
} = require('../../actionTypes').default;

const initialState = core.InitialState();

export default function (state = initialState, {type, payload}) {

  switch (type) {

    case UPDATE_PIXEL:
      var x = payload.x;
      var y = payload.y;
      var newColor = payload.newColor;
      state.board[y][x] = newColor;
      return state;

  };
  return state;
}
