/* beautify preserve:start */
import {fromJS} from 'immutable';
import {
  PARTY_SEATED, ORDER_STARTED, ITEM_ADDED, ITEM_REMOVED, ORDER_COMPLETED, ORDER_DELIVERED
}
from '../actions/table-actions.js';
import {CLEAN, DIRTY, OCCUPIED, ORDERING, ORDERED, HAS_FOOD} from '../constants';
/* beautify preserve:end */


export const INITIAL_STATE = fromJS([{
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
}]);

export default function tableReducer(state = INITIAL_STATE, action) {
  const findIndex = (collection, id) => collection.findIndex(n => n.get('id') === id);

  if (!action.type || !action.payload) {
    return state;
  }
  const tableIndex = findIndex(state, action.payload.tableId);
  const actions = {
    [PARTY_SEATED]: (state) => state.setIn([tableIndex, 'status'], OCCUPIED),
    [ORDER_STARTED]:  (state) => state.setIn([tableIndex, 'status'], ORDERING),
    [ITEM_ADDED]: (state) => state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0, value => value + 1),
    [ITEM_REMOVED]: (state) => state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0, value => value === 0 ? 0 : value - 1),
    [CUSTOMER_PAID]: (state) => state.setIn([tableIndex, 'status'], DIRTY),
    [TABLE_CLEANED]: (state) => state.setIn([tableIndex, 'status'], CLEAN),
    [ORDER_COMPLETED]: (state) => state.setIn([tableIndex, 'status'], ORDERED),
    [ORDER_DELIVERED]: (state) => state.setIn([tableIndex, 'status'], HAS_FOOD)
  };

  return actions[action.type] ? actions[action.type](state) : state;
/*
  let tableIndex = findIndex(state, action.payload.tableId);
  switch (action.type) {
  case PARTY_SEATED:
    {

      return state.setIn([tableIndex, 'status'], OCCUPIED);
    }
  case ORDER_STARTED:
    {

      return state.setIn([tableIndex, 'status'], ORDERING);
    }
  case ITEM_ADDED:
    {

      return state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0, value => value + 1);
    }
  case ITEM_REMOVED:
    {
      
      return state.updateIn([tableIndex, 'order', action.payload.menuItemId], 0, value => value === 0 ? 0 : value - 1);
    }

  case 'CUSTOMER_PAID':
    {

      return state.setIn([tableIndex, 'status'], DIRTY);
    }
  case 'TABLE_CLEANED':
    {

      return state.setIn([tableIndex, 'status'], CLEAN);
    }
  case ORDER_COMPLETED:
    {
       return state.setIn([tableIndex, 'status'], ORDERED);
    }
    case ORDER_DELIVERED:
    {
     return state.setIn([tableIndex, 'status'], HAS_FOOD); 
    }
  default:
    return state;
  }*/
}
