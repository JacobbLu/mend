'use strict';

import Rx from 'rxjs';

import {combineEpics} from 'redux-observable';
import {push, replace} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {
  loadGallery,
} from '../../lib/backend';

const {
  LOAD_GALLERY_REQUEST,
  LOAD_GALLERY_SUCCESS,
  LOAD_GALLERY_FAILURE,
} = require('../actionTypes').default;


const loadGallerySuccess = (payload) => ({payload, type: LOAD_GALLERY_SUCCESS});
const loadGalleryFailure = (payload) => ({payload, type: LOAD_GALLERY_FAILURE});
const loadGalleryRequest = (action$, store) =>
  action$.ofType(LOAD_GALLERY_REQUEST)
    .pluck('payload')
    .flatMap(payload => {
      return loadGallery(payload)
        .map((payloadFromServer)=>{
          return loadGallerySuccess(payloadFromServer);
        })
        .catch((error) => Rx.Observable.of(error)
          .do((error) =>{
            console.log('load gallery failure');
          })
          .map(()=>loadGalleryFailure(payload))
        )
    });

export default combineEpics(
  loadGalleryRequest
);
