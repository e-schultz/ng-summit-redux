/* beautify preserve:start */
import * as redux from 'redux';
//import http from '../middleware/http/http-state-reducer';
import lineup from './lineup-reducer';
import tables from './table-reducer';
import {router} from 'redux-ui-router';
import menu from './menu-reducer';
/* beautify preserve:end */

const reducers = redux.combineReducers({
//  http,
  lineup,
  tables,
  router,
  menu
});

export default reducers;
