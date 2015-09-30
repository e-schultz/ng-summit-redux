import angular from 'angular';
import OrdersController from './orders-controller';
import pendingOrders from './pending-orders';
import completedOrders from './completed-orders';
import uiRouter from 'angular-ui-router';
import pendingOrdersContainer from './pending-orders-container-tpl.html';
import completedOrdersContainer from './completed-orders-container-tpl.html';
export default angular
  .module('app.components.orders', [uiRouter, pendingOrders, completedOrders])
  .controller('OrdersController', OrdersController)
  .config(function ($stateProvider, $urlRouterProvider) {
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
            template: completedOrdersContainer
          }
        }
      })
      .state('app.orders.pending', {
        url: '/pending',
        views: {
          'orders@app.orders': {
            template: pendingOrdersContainer
          }
        }
      });
  })
  .name;
