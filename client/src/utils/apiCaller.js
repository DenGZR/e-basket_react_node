import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:9001';

export default function callApi(endpoint, method = 'get', body, options = { isJSON: true }) {

  const headers = {};

  if (options.isJSON) {
    headers['content-type'] = 'application/json';
  } else {
    headers['content-type'] = 'content-type:text/plain;charset=UTF-8';
  }  
console.log('body',body,headers)
  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body: options.isJSON || method !== 'get' ? JSON.stringify(body) : body,
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
