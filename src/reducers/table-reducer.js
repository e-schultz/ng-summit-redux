/* beautify preserve:start */
import {fromJS, List} from 'immutable';
import {
  PARTY_SEATED,
  ORDER_STARTED,
  ITEM_ADDED,
  ITEM_REMOVED,
  ORDER_COMPLETED,
  ORDER_DELIVERED,
  BILL_PAID,
  TABLE_CLEANED}
from '../actions/table-actions.js';
import {CLEAN, DIRTY, OCCUPIED, ORDERING, ORDERED, HAS_FOOD} from '../constants';
/* beautify preserve:end */

export const INITIAL_STATE = [{
    id: 1,
    numberOfSeats: 2,
    status: CLEAN,
    order: {}
}, {
    id: 2,
    numberOfSeats: 4,
    status: CLEAN,
    order: {}
},
  {
    id: 3,
    numberOfSeats: 4,
    status: CLEAN,
    order: {}
},
  {
    id: 4,
    numberOfSeats: 2,
    status: CLEAN,
    order: {}
}];

export default function tableReducer(state = INITIAL_STATE, action) {
  /*
  Typically if using ImmutableJS, we would want to keep things
  as immutable throughout the application.

  For clarity of the examples, we are doing toJS/fromJS within the reducer
  so our component code is easier to follow, and only using immutableJS
  here to provide an easy way to do updates to our collection in an
  immutable fashion
   */
  state = List.isList(state) ? state : fromJS(state);
  let findIndex = (collection, id) => collection.findIndex(n => n.get('id') === id);

  if (!action.type || !action.payload) {
    return state.toJS();
  }

  let tableIndex = findIndex(state, action.payload.tableId);
  switch (action.type) {
  case PARTY_SEATED:
    return state.setIn([tableIndex, 'status'], OCCUPIED).toJS();
  case ORDER_STARTED:
    return state.setIn([tableIndex, 'status'], ORDERING).toJS();
  case ITEM_ADDED:
    return state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0, value => value + 1).toJS();
  case ITEM_REMOVED:
    return state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0,
      value => value === 0 ? 0 : value - 1).toJS();
  case BILL_PAID:
    return state.setIn([tableIndex, 'status'], DIRTY).setIn([tableIndex, 'order'], fromJS({})).toJS();
  case TABLE_CLEANED:
    return state.setIn([tableIndex, 'status'], CLEAN).toJS();
  case ORDER_COMPLETED:
    return state.setIn([tableIndex, 'status'], ORDERED).toJS();
  case ORDER_DELIVERED:
    return state.setIn([tableIndex, 'status'], HAS_FOOD).toJS();
  default:
    return state.toJS();
  }
}
