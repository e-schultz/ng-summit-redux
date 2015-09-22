import angular from 'angular';
import OrdersController from './orders-controller';
import pendingOrders from './pending-orders';
import completedOrders from './completed-orders';
import uiRouter from 'angular-ui-router';
export default angular
  .module('app.components.orders', [uiRouter, pendingOrders, completedOrders])
  .controller('OrdersController', OrdersController)
  .config(function ($stateProvider) {
    $stateProvider.state('app.orders', {
        url: '/orders',
        abstract: true,
        views: {
          'orders@app': {
            template: '<div ui-view="orders"></div>',
            controller: 'OrdersController',
            controllerAs: 'orders'
          }
        }

      })
      .state('app.orders.pending', {
        url: '/pending',
        views: {
          'orders@app.orders': {
            template: '<pending-orders orders="orders.pending"></pending-orders>'
          }
        }
      }).state('app.orders.completed', {
        url: '/completed',
        views: {
          'orders@app.orders': {
            template: `<completed-orders 
            orders="orders.completed"
            on-add-item-to-order="orders.addItemToOrder(tableId,menuItemId)"
            on-remove-item-from-order="orders.removeItemFromOrder(tableId,menuItemId)"
            on-deliver-order="orders.deliverOrder(tableId)">
            </completed-orders>`
          }
        }
      }).state('app.orders.delivered', {
        url: '/delivered',
        views: {
          'orders@app.orders': {
            template: 'delivered'
          }
        }
      });
  })
  .name;
