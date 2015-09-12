import objectAssign from 'object-assign';

import {onHttpRequest, onHttpRequestSuccess, onHttpRequestFail} from './http-actions';

export const CALL_API = Symbol('Call API');
export const DEFAULT_API_ENDPOINT = '/';

export default function httpMiddleware($http, $timeout) {
  function callApi(endpoint) {
    return $http.get(endpoint)
      .then(res => res.data);
  }

  return () => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
      return next(action);
    }

    let { endpoint } = callAPI;
    const { types, bailout } = callAPI;

    if (typeof endpoint === 'function') {
      endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
      throw new Error('Specify a string endpoint URL.');
    }

    if (!Array.isArray(types) || types.length !== 3) {
      throw new Error('Expected an array of three action types: [requestType, successType, failureType]');
    }

    if (!types.every(type => typeof type === 'string')) {
      throw new Error('Expected action types to be strings.');
    }

    if (typeof bailout !== 'undefined' && typeof bailout !== 'function') {
      throw new Error('Expected bailout to either be undefined or a function.');
    }

    if (bailout && bailout(store.getState())) {
      return Promise.resolve();
    }

    function actionWith(data) {
      const finalAction = objectAssign({}, action, data);
      delete finalAction[CALL_API];
      return finalAction;
    }

    const [requestType, successType, failureType] = types;

    next(onHttpRequest());
    next(actionWith({ type: requestType }));

    return callApi(endpoint)
      .then(
        response => {
          next(onHttpRequestSuccess());
          next(actionWith({
            payload: response,
            type: successType
          }))
        },
        error => {
          next(onHttpRequestFail());
          next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
          }))
        }
      );
  };
}

httpMiddleware.$inject = ['$http', '$timeout'];
