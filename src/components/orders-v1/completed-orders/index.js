import angular from 'angular';
import CompletedOrdersController from './completed-orders-controller';
import completedOrdersTemplate from './completed-orders-tpl.html';

export default angular
  .module('app.components.completedOrders', [])
  .directive('completedOrders', () => {
    return {
      restrict: 'E',
      controller: CompletedOrdersController,
      controllerAs: 'completedOrders',
      bindToController: true,
      template: completedOrdersTemplate,
      scope: {}
    };
  })
  .name;
