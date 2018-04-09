'use strict';

const {
  LOAD_GALLERY_REQUEST,
} = require('../actionTypes').default;

export const loadGalleryRequest = (payload) => ({
  type: LOAD_GALLERY_REQUEST,
  payload: payload,
});
