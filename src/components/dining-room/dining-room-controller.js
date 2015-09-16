export default class DiningRoomController {
  constructor($ngRedux, $scope, tableActions) {
    

    let _updateOn = (state) => ({
      tables: state.tables,
      parties: state.lineup.get('parties'),
      menu: state.menu
    });
    let disconnect = $ngRedux.connect(_updateOn, tableActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }


}
