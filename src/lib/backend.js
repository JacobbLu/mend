import _ from 'lodash';
import {
  getReq,
  getReqWithBody,
  postReq,
  deleteReq,
  dataPostReq
} from './backendUtils';

const serverHost = 'http://localhost:3000/';

export function addToCart(payload) {
  // console.log('Add To Cart Request');
  // console.log('Item Detail', payload);
  return postReq(serverHost + 'add-cart-record', payload);
}

export function loadCart(payload) {
  // console.log('Load Cart Request');
  // console.log('Cookie Detail', payload);
  return postReq(serverHost + 'cart', payload);
}

export function loadGallery(payload) {
  console.log('Load gallery Request');
  return postReq(serverHost + 'gallery', payload);
}
