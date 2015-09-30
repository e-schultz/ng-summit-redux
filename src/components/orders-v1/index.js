import angular from 'angular';
import OrdersController from './orders-controller';
import pendingOrders from './pending-orders';
import completedOrders from './completed-orders';
import uiRouter from 'angular-ui-router';
export default angular
  .module('app.components.orders', [uiRouter, pendingOrders, completedOrders])
  .config(function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/orders/pending');
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

      }).state('app.orders.completed', {
        url: '/completed',
        views: {
          'orders@app.orders': {
            template: '<completed-orders></completed-orders>'
          }
        }
      })
      .state('app.orders.pending', {
        url: '/pending',
        views: {
          'orders@app.orders': {
            template: '<pending-orders></pending-orders>'
          }
        }
      });
  })
  .controller('OrdersController', OrdersController)
  .name;
