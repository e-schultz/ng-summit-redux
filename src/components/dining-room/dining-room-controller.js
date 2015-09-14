export default class DiningRoomController {
  constructor($ngRedux, $scope, lineupActions) {
    

    let _updateOn = (state) => ({
      tables: state.tables,
      parties: state.lineup.get('parties')
    });
    let disconnect = $ngRedux.connect(_updateOn, lineupActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }


}
