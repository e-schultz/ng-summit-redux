/* beautify preserve:start */
import * as redux from 'redux';
import http from '../middleware/http/http-state-reducer';
import lineup from './lineup-reducer';
import tables from './table-reducer';
/* beautify preserve:end */

const reducers = redux.combineReducers({
  http,
  lineup,
  tables
});

export default reducers;
