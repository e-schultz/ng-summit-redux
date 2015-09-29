/* beautify preserve:start */
import {PARTY_LEFT,PARTY_JOINED} from '../actions/lineup-actions.js';
import {PARTY_SEATED} from '../actions/table-actions.js';
import * as R from 'ramda';
/* beautify preserve:end */

/**
data structure

parties: [{
  id: number,
  numberOfPeople: number  
}]

**/

const INITIAL_STATE = [];

export default function lineup(state = INITIAL_STATE, action) {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
  case PARTY_JOINED:
    let payload = {...action.payload, numberOfPeople: parseInt(action.payload.numberOfPeople)};
    return R.append(payload)(state);

  case PARTY_SEATED:
    return R.reject(n => n.partyId === action.payload.partyId)(state);
  case PARTY_LEFT:
    return R.reject(n => n.partyId === action.payload.partyId)(state);
  default:
    return state;
  }
}
