/* beautify preserve:start */
import * as redux from 'redux';
import http from '../middleware/http/http-state-reducer';
/* beautify preserve:end */

const reducers = redux.combineReducers({
  http
});

export default reducers;
