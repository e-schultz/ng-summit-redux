/* beautify preserve:start */
import * as redux from 'redux';
import http from '../middleware/http/http-state-reducer';
import lineup from './lineup-reducer';
/* beautify preserve:end */

const reducers = redux.combineReducers({
  http,
  lineup
});

export default reducers;
