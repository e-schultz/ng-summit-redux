import lineupActions from '../../actions/lineup-actions';

export default class MainController {
  constructor($ngRedux, ngUiRouterActions, $scope) {
    this.$ngRedux = $ngRedux;
    
    let disconnect = $ngRedux.connect(state => this.onUpdate(state), ngUiRouterActions)(this);
    $scope.$on('$destroy', () => disconnect());

  }

  onUpdate(state) {
    return {
      currentStateName: state.router.getIn(['currentState', 'name'])
    };
  }
  populate() {
    [1, 2, 2, 4, 2, 1, 2, 4].forEach(n => this.$ngRedux.dispatch(lineupActions.joinLine(n)));
  }

}
