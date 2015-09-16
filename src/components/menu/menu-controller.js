export default class MenuController {
  constructor($scope, $ngRedux, tableActions) {
     let findIndex = (collection, id) => collection.findIndex(n => n.get('id') === parseInt(id,10));
    let _updateOn = (state) => {
      let tableIndex = findIndex(state.tables,this.tableId);
      let tableOrder = state.tables.getIn([tableIndex,'order']);
      console.log('table index',tableIndex,tableOrder.toJS());
      return {
        order: state.tables.getIn([findIndex(state.tables, this.tableId),'order']),
        menu: state.menu
      };
    };

    let disconnect = $ngRedux.connect(_updateOn, tableActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }
}
