import angular from 'angular';
import MainController from './main-controller';

export default angular
  .module('app.components.main', [])
  .controller('MainController', MainController)
  .name;
