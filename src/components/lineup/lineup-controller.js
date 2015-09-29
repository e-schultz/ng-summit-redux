import lineupActions from '../../actions/lineup-actions';

export default class LineupController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(
        state => this.onUpdate(state),  // What we want to map to our target
        lineupActions                   // Actions we want to map to our target
        )(this);                        // Our target
    
    $scope.$on('$destroy', disconnect); // Cleaning house
  }

  onUpdate(state) {
    return {
      parties: state.lineup,
      numberOfPeople: null 
    };
  }
};

