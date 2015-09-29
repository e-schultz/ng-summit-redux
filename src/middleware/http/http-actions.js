// HTTP_REQUEST: Action for when a request is started
// HTTP_REQUEST_SUCCESS: Action for when a request is successful
// HTTP_REQUEST_FAIL: Action for when a request fails
//
export const HTTP_REQUEST = '@@reduxNgHttp/httpRequest';
export const HTTP_REQUEST_SUCCESS = '@@reduxNgHttp/httpRequestSuccess';
export const HTTP_REQUEST_FAIL = '@@reduxNgHttp/httpRequestFail';


/**
 * This action is triggered when a $http request fails.
 *
 * https://docs.angularjs.org/api/ng/service/$http
 *
 * @param {Object} response Response object
 * @return {Object} Action object
 */
export function onHttpRequestFail(response) {
  return {
    type: HTTP_REQUEST_FAIL,
    payload: {
      response
    }
  };
}

/**
 * This action is triggered when a $http request is successful.
 *
 * https://docs.angularjs.org/api/ng/service/$http
 *
 * @param {Object} response Response object
 * @return {Object} Action object
 */
export function onHttpRequestSuccess(response) {
  return {
    type: HTTP_REQUEST_SUCCESS,
    payload: {
      response
    }
  };
}

/**
 * This action is triggered when a $http request is made.
 *
 * https://docs.angularjs.org/api/ng/service/$http
 *
 * @param {String} route The route we are attempting to hit
 * @param {Object} data Data to be sent with the request
 * @param {Object} config Configuration object
 * @return {Object} Action object
 */
export function onHttpRequest(route, data, config) {
  return {
    type: HTTP_REQUEST,
    payload: {
      route,
      data,
      config
    }
  };
}
