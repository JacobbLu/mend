import {AUTH_TOKEN_KEY} from './config';

function storeAuthToken (authToken) {
  // localStorage.setItem(AUTH_TOKEN_KEY, authToken);
  document.cookie = AUTH_TOKEN_KEY + "=" + authToken + '; path=/';
}

function getAuthToken() {
  var value = "; " + document.cookie;
  var parts = value.split("; " + AUTH_TOKEN_KEY + "=");
  if (parts.length == 2)
    return parts.pop().split(";").shift();
  return null;
}

// function getAuthToken () {
//   const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
//   return authToken === 'undefined'
//     ? null
//     : authToken;
// }

function deleteAuthToken () {
  // localStorage.removeItem(AUTH_TOKEN_KEY);
  document.cookie = AUTH_TOKEN_KEY + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

module.exports = {
  storeAuthToken,
  getAuthToken,
  deleteAuthToken
};
