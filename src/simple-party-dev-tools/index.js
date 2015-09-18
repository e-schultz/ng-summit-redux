/*eslint-disable */
/* beautify preserve:start */
import angular from 'angular';
import ngRedux from 'ng-redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import ngImmutable from '../lib/immutable-angular';
import lineup from '../components/lineup';
import lineupSummary from '../components/lineup-summary';
import * as Immutable from 'immutable';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';
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
  .module('simplePartyDev', [
    ngRedux,
    ngImmutable,
    lineup,
    lineupSummary

  ])
  .config(($ngReduxProvider) => {
      let stateDeseralizer = (state) => {
        let x = { ...state, lineup: Immutable.fromJS(state.lineup)};
        console.log('x',x);
        return x;
      }
      $ngReduxProvider.createStoreWith(reducers, [logger], [devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
  }).run(($ngRedux, $rootScope, $timeout) => {
    React.render(
      <App store={ $ngRedux }/>,
      document.getElementById('devTools')
    );

    
        $ngRedux.subscribe(_ => {
          $timeout(()=>$rootScope.$apply(), 100);
        
    
    });
  })
  .name;

   class App extends Component {
  render() {
    
    return (
      <div>
        <DebugPanel top right bottom>
          <DevTools store={ this.props.store } monitor = { LogMonitor } visibleOnLoad= { true } />
        </DebugPanel>
      </div>
    );
  }
}
/*eslint-enable*/

  
