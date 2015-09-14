/* beautify preserve:start */
import {fromJS} from 'immutable';
import {PARTY_SEATED} from '../actions/lineup-actions.js';
/* beautify preserve:end */

export const CLEAN = 'CLEAN';
export const DIRTY = 'DIRTY';
export const OCCUPIED = 'OCCUPIED';

export const INITIAL_STATE = fromJS([{
    id: 1,
    numberOfSeats: 2,
    status: CLEAN
}, {
    id: 2,
    numberOfSeats: 4,
    status: CLEAN
},
  {
    id: 3,
    numberOfSeats: 4,
    status: CLEAN
},
  {
    id: 4,
    numberOfSeats: 2,
    status: CLEAN
}]);

export default function tableReducer(state = INITIAL_STATE, action) {
  let findIndex = (collection, id) => collection.findIndex(n => n.get('id') === id);
  switch (action.type) {
  case PARTY_SEATED:
    {
      let tableIndex = findIndex(state, action.payload.id);
      return state.setIn([tableIndex, 'status'], OCCUPIED);
    }
  case 'CUSTOMER_PAID':
    {
      let tableIndex = findIndex(state, action.payload.id);
      return state.setIn([tableIndex, 'status'], DIRTY);
    }
  case 'TABLE_CLEANED':
    {
      let tableIndex = findIndex(state, action.payload.id);
      return state.setIn([tableIndex, 'status'], CLEAN);
    }
  case 'ORDER_PLACED':
    {
      return state;
    }
  default:
    return state;
  }
}
