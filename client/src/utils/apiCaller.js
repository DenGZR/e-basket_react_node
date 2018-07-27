import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:9001';

export default function callApi(endpoint, method = 'get', body, options = { isJSON: true }) {

  const headers = {
    // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  };
  
  // if (options.isJSON) {
  //   headers['Content-Type'] = 'application/json';
  // } 

  console.log('body',body,headers)
  console.log('body',options.isJSON || method !== 'get' ? JSON.stringify(body) : body)
  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    mode: 'cors',  
    body: `url=${body.url}`,  
    // body: options.isJSON || method !== 'get' ? JSON.stringify(body) : body,
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
