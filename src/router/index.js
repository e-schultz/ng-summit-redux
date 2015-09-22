import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routerConfig from './router-config-v2';

export default angular
  .module('app.router', [
    uiRouter
  ])
  .config(routerConfig)
  .name;
