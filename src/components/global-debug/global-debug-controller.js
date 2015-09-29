export default class GlobalDebugController {
  constructor($ngRedux, $scope) {

    let _onChange = (state) => ({
      globalState: state
    });
    
    const disconnect = $ngRedux.connect(_onChange)(this);

    $scope.$on('$destroy', () => disconnect());
  }
}

