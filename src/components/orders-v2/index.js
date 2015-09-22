import angular from 'angular';
import OrdersController from './orders-controller';
import pendingOrders from './pending-orders';
import completedOrders from './completed-orders';
export default angular
  .module('app.components.orders', [pendingOrders,completedOrders])
  .controller('OrdersController', OrdersController)
  .name;
