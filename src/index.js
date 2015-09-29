/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import ngHttpMiddleware from './middleware/http';
import reducers from './reducers';
import components from './components';
import router from './router';
import ngImmutable from './lib/immutable-angular';
import ngReduxRouter from 'redux-ui-router';
import thunk from 'redux-thunk';
// dev tools
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';
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
  .module('app', [
    ngRedux,
    ngHttpMiddleware,
    components,
    router,
    ngImmutable,
    ngReduxRouter
  ])
  .config(($ngReduxProvider) => {
    
    $ngReduxProvider.createStoreWith(reducers, [thunk, logger, 'ngUiRouterMiddleware','httpMiddleware'], [devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
  }).run(($ngRedux, $rootScope, $timeout) => {
    React.render(
      <App store={ $ngRedux }/>,
      document.getElementById('devTools')
    );

    //To reflect state changes when disabling/enabling actions via the monitor
    //there is probably a smarter way to achieve that
    
        //$rootScope.$evalAsync(()=> console.log('Sync events'));
        $ngRedux.subscribe(_ => {
          $timeout(()=>$rootScope.$apply(), 100);
        //setTimeout($rootScope.$apply, 100);
    
    });
  })
  .name;

   class App extends Component {
  render() {
    return (
      <div>
        <DebugPanel top right bottom>
          <DevTools store={ this.props.store } monitor = { LogMonitor } visibleOnLoad= { false }/>
        </DebugPanel>
      </div>
    );
  }
}

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
