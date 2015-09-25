import angular from 'angular';
import completedOrdersTemplate from './completed-orders-tpl.html';

export default angular
  .module('app.components.completedOrders', [])
  .directive('completedOrders', () => {
    return {
      restrict: 'E',
      template: completedOrdersTemplate,
      scope: {
        orders: '=',
        deliverOrder: '&onDeliverOrder',
        addItemToOrder: '&onAddItemToOrder',
        removeItemFromOrder: '&onRemoveItemFromOrder'
      }
    };
  })
  .name;
