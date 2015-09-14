export default class DiningRoomController {
  constructor($ngRedux, $scope) {
    let _updateOn = (state) => ({
      tables: state.tables
    });
    let disconnect = $ngRedux.connect(_updateOn)(this);
    $scope.$on('$destroy', () => disconnect());
  }
}
