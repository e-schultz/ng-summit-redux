import angular from 'angular';
import OrdersController from './orders-controller';

export default angular
  .module('app.components.orders', [])
  .controller('OrdersController', OrdersController)
  .name;
