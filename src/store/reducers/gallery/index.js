'use strict';
import {List} from 'immutable';
import * as core from './core';

const {
  LOAD_GALLERY_SUCCESS,
} = require('../../actionTypes').default;

const initialState = core.InitialState();

export default function (state = initialState, {type, payload}) {
  switch (type) {

    case LOAD_GALLERY_SUCCESS:
      return state.set('gallery', List(payload));

  };
  return state;
}
