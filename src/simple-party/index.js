/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import ngImmutable from '../lib/immutable-angular';
import lineup from '../components/lineup';
import lineupSummary from '../components/lineup-summary';
import * as Immutable from 'immutable';
/* beautify preserve:end */

const logger = createLogger({
  level: 'info',
  collapsed: true,
  transformer: (state) => {
    var newState = {};
    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };
    return newState;
  }
});

export default angular
  .module('simpleParty', [
    ngRedux,
    ngImmutable,
    lineup,
    lineupSummary

  ])
  .config(($ngReduxProvider) => {
    
    $ngReduxProvider.createStoreWith(reducers, [logger]);
  })
  .name;

  
