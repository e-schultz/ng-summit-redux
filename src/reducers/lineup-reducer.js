/* beautify preserve:start */
import {fromJS} from 'immutable';
import {PARTY_SEATED,PARTY_LEFT,PARTY_JOINED} from '../actions/lineup-actions.js';
/* beautify preserve:end */

/**
data structure

parties: [{
  id: number,
  numberOfPeople: number  
}]

**/

const INITIAL_STATE = fromJS({
  parties: []
});

export default function lineup(state = INITIAL_STATE, action) {

  switch (action.type) {
  case PARTY_JOINED:
    {
      return state.updateIn(['parties'], parties => parties.push(fromJS(action.payload)));
    }
  case PARTY_SEATED:
    {
      const partyIndex = state.get('parties').findIndex(n => n.get('partyId') === action.payload.partyId);
      // TODO: error handling if index is -1?
      // alternativly - do I want to change status instead of removing?
      return state.removeIn(['parties', partyIndex]);
    }
  case PARTY_LEFT:
    {
      const partyIndex = state.get('parties').findIndex(n => n.get('partyId') === action.payload.partyId);
      return state.removeIn(['parties', partyIndex]);
    }
  default:
    return state;
  }
}
