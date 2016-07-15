import fetchJsonp from 'fetch-jsonp';
import qs from 'querystring';

export const fetchWrap = (method, api, payload) =>
  fetchJsonp(api, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json());


export const buildReqUrl = (endpoint, queryData) =>
  `${endpoint}?${qs.stringify(queryData)}`;
