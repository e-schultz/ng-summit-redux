export default class MainController {
  constructor($ngRedux, lineupActions, ngUiRouterActions, $scope) {
    this.$ngRedux = $ngRedux;
    this.lineupActions = lineupActions;
    let _onUpdate = (state) => {
      
      return {
        currentStateName: state.router.getIn(['currentState','name'])
      };
    };

    let disconnect = $ngRedux.connect(_onUpdate, ngUiRouterActions)(this);
    $scope.$on('$destroy', () => disconnect());

    this.stateGoTest = (state) => ngUiRouterActions.stateGo(state);
  }

  populate() {
    [1, 2, 2, 4, 2, 1, 2, 4].forEach(n => this.$ngRedux.dispatch(this.lineupActions.joinLine(n)));

  }

}
