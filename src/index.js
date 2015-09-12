/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import * as redux from 'redux';
import createLogger from 'redux-logger';
import ngHttpMiddleware from './middleware/http';
import reducers from './reducers';
import components from './components';
import actions from './actions';
/* beautify preserve:end */

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default angular
  .module('app', [
    ngRedux,
    ngHttpMiddleware,
    components,
    actions
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducers, ['httpMiddleware', logger]);
  })
  .name;
