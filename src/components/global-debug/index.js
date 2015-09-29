import angular from 'angular';
import GlobalDebugController from './global-debug-controller';

export default angular
  .module('app.components.globalDebug', [])
  .controller('GlobalDebugController', GlobalDebugController)
  .directive('globalDebug', () => {
    return {
      restrict: 'E',
      controller: 'GlobalDebugController',
      controllerAs: 'debug',
      bindToController: true,
      template: require('./global-debug-tpl.html')
    };
  })
  .name;
