export default class DiningRoomController {
  constructor($ngRedux, $scope, tableActions) {

    let disconnect = $ngRedux.connect((state) => this.onUpdate(state), tableActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  onUpdate(state) {
    return {
      tables: state.tables,
      parties: state.lineup.get('parties'),
      menu: state.menu
    };
  }

}
