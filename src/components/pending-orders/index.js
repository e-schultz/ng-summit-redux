import angular from 'angular';
import PendingOrdersController from './pending-orders-controller';
import pendingOrdersTemplate from './pending-orders-tpl.html';

export default angular
  .module('app.components.pendingOrders', [])
  .directive('pendingOrders', () => {
    return {
      restrict: 'E',
      controller: PendingOrdersController,
      controllerAs: 'pendingOrders',
      bindToController: true,
      template: pendingOrdersTemplate,
      scope: {}
    };
  })
  .name;
