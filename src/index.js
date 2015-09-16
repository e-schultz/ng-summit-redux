/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import ngHttpMiddleware from './middleware/http';
import reducers from './reducers';
import components from './components';
import actions from './actions';
import router from './router';
import ngImmutable from './lib/immutable-angular';
import ngReduxRouter from 'redux-ui-router';
import thunk from 'redux-thunk';
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
    actions,
    router,
    ngImmutable,
    ngReduxRouter
  ])
  .config(($ngReduxProvider, ngUiRouterActionsProvider) => {
    ngUiRouterActionsProvider.bindActionCreators(false);
    $ngReduxProvider.createStoreWith(reducers, [thunk, 'ngUiRouterMiddleware','httpMiddleware', logger]);
  })
  .name;

/*

So, so now we have created a lineup-reducer, and some lineup actions, we need to start
hooking things into our angular application.

Redux is a framework agonstic library, and can be used with many frameworks, and bindings 
exist for react, angular, and a beta version for angular 2.

For working with Angular, we will be using ng-redux.

Hooking up the $ngRedux provider is pretty straight forward. We will be including a middleware
for now, but it will be discussed later.

at this point, we'll also want to add our lineup-reducer to the reducers
// reducers/index.js 
// onto lineup-component

 */
