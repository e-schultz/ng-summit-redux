import angular from 'angular';
import MenuController from './menu-controller';
import menuTemplate from './menu-tpl.html';

export default angular
  .module('app.components.menu', [])
  .directive('menu', () => {
    return {
      restrict: 'E',
      controller: MenuController,
      controllerAs: 'menu',
      bindToController: true,
      template: menuTemplate,
      replace: true,
      scope: {
        tableId: '@',
        items: '=menuItems',
        currentOrder: '=',
        addItemToOrder: '&onAddItemToOrder',
        removeItemFromOrder: '&onRemoveItemFromOrder',
        completeOrder: '&onCompleteOrder'
      }
    };
  })
  .name;
