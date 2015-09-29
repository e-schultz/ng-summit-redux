import tableActions from '../../actions/table-actions';

export default class DiningRoomController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(
      (state) => this.onUpdate(state), 
      tableActions)(this);
    
    $scope.$on('$destroy', () => disconnect());
  }

  onUpdate(state) {
    return {
      tables: state.tables,
      parties: state.lineup,
      menu: state.menu
    };
  }

}
