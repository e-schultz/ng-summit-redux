/* beautify preserve:start */
import {fromJS} from 'immutable';
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
    default: return state;
  }
}
