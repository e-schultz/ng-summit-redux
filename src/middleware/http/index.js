import angular from 'angular';

import httpMiddleware from './http-middleware';
import httpActions from './http-actions';

export default angular
  .module('ng-http-middleware', [])
  .factory('httpActions', httpActions)
  .factory('httpMiddleware', httpMiddleware)
  .name;
