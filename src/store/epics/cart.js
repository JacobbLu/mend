'use strict';

import Rx from 'rxjs';

import {combineEpics} from 'redux-observable';
import {push, replace} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {
  addToCart,
  loadCart,
} from '../../lib/backend';

const {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE
} = require('../actionTypes').default;

const addToCartSuccess = (payload) => ({payload, type: ADD_TO_CART_SUCCESS});
const addToCartFailure = (payload) => ({payload, type: ADD_TO_CART_FAILURE});
const addToCartRequest = (action$, store) =>
  action$.ofType(ADD_TO_CART_REQUEST)
    .pluck('payload')
    .flatMap(payload => {
      return addToCart({
        design: store.getState().getIn(['board', 'board']),
        options: store.getState().getIn(['cart', 'preCart']).toJS(),
        ...payload
      })
        .map((payloadFromServer)=>{
          return addToCartSuccess(payloadFromServer);
        })
        .catch((error) => Rx.Observable.of(error)
          .do((error) =>{
            console.log('add to cart failure');
          })
          .map(()=>addToCartFailure(payload))
        )
    });

const loadCartSuccess = (payload) => ({payload, type: LOAD_CART_SUCCESS});
const loadCartFailure = (payload) => ({payload, type: LOAD_CART_FAILURE});
const loadCartRequest = (action$, store) =>
  action$.ofType(LOAD_CART_REQUEST)
    .pluck('payload')
    .flatMap(payload => {
      return loadCart(payload)
        .map((payloadFromServer)=>{
          return loadCartSuccess(payloadFromServer);
        })
        .catch((error) => Rx.Observable.of(error)
          .do((error) =>{
            console.log('load cart failure');
          })
          .map(()=>loadCartFailure(payload))
        )
    });

export default combineEpics(
  addToCartRequest,
  loadCartRequest
);
