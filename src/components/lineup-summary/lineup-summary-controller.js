import * as R from 'ramda';

export default class LineupSummaryController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state))(this);

    $scope.$on('$destroy', disconnect);
  }

  onUpdate(state) {
    return {
      total: R.reduce((acc, val) => acc + val.numberOfPeople, 0)(state.lineup)
    };
  }
};

