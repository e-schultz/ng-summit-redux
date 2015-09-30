/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import lineup from '../components/lineup';
import lineupSummary from '../components/lineup-summary';
/* beautify preserve:end */

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default angular
  .module('simpleParty', [
    ngRedux,
    lineup
    ,lineupSummary

  ])
  .config(($ngReduxProvider) => {
    
    $ngReduxProvider.createStoreWith(reducers, [logger]);
  })
  .name;

  
