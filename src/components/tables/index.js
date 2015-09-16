import angular from 'angular';
import TablesController from './tables-controller';
import tablesTemplate from './tables-tpl.html';

export default angular
  .module('app.components.tables', [])
  .directive('tables', () => {
    return {
      restrict: 'E',
      controller: TablesController,
      controllerAs: 'table',
      bindToController: true,
      template: tablesTemplate,
      scope: {
        tableId: '@',
        tableStatus: '@',
        seatParty: '&onSeated',
        startOrder: '&onOrderStarted',
        addItemToOrder: '&onAddItemToOrder',
        removeItemFromOrder: '&onRemoveItemFromOrder',
        finishOrder: '&onFinishOrder',
        numberOfSeats: '@',
        parties: '=',
        menu: '='
      }
    };
  })
  .name;