import angular from 'angular';
import addItemTemplate from './add-item-tpl.html';

export default angular
  .module('app.components.addItem', [])
  .directive('addItem', () => {
    return {
      restrict: 'E',
      template: addItemTemplate,
      replace: true,
      scope: {
        addItemToOrder: '&onAddItemToOrder',
        isDisabled: '=isDisabled'
      }
    };
  })
  .name;
