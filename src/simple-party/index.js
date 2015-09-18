/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import ngImmutable from '../lib/immutable-angular';
import lineup from '../components/lineup';
/* beautify preserve:end */

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default angular
  .module('simpleParty', [
    ngRedux,
    ngImmutable,
    lineup
  ])
  .config(($ngReduxProvider) => {
    
    $ngReduxProvider.createStoreWith(reducers, [logger]);
  })
  .name;

  
