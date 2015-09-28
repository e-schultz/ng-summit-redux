import angular from 'angular';
import removeItemTemplate from './remove-item-tpl.html';

export default angular
  .module('app.components.removeItem', [])
  .directive('removeItem', () => {
    return {
      restrict: 'E',
      template: removeItemTemplate,
      replace: true,
      scope: {
        removeItemFromOrder: '&onRemoveItemFromOrder'
      }
    };
  })
  .name;
