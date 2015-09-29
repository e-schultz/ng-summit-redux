import * as localStorage from 'store';
export const PARTY_JOINED = 'PARTY_JOINED';
export const PARTY_LEFT = 'PARTY_LEFT';

// temp function for testing for now
export function _resetIndex() {
  localStorage.set('partyId', 0);
}

/**
 * Get the next party ID to be used. In a real application, we might
 * do an API call and return the result. For the sake of the demo,
 * we are just using local storage to keep track of the id.
 * @return {integer} The next party id
 */
function getNextPartyId() {
  let partyId = localStorage.get('partyId');
  partyId = partyId === []._ ? 1 : ++partyId;
  localStorage.set('partyId', partyId);
  return partyId;
}

/*
Unless using a middleware, your actions in Redux should return
plain javascript objects. 

There are middlewares like redux-promise, redux-thunk etc which can 
allow you to return promises. This is not covered in this application,
but please refer to the Redux documentation on Async Actions for more
details.

http://rackt.github.io/redux/docs/advanced/AsyncActions.html

*/
export function joinLine(numberOfPeople) {

  return {
    type: PARTY_JOINED,
    payload: {
      partyId: getNextPartyId(),
      numberOfPeople: numberOfPeople
    }
  };

}

export function leaveLine(id) {
  return {
    type: PARTY_LEFT,
    payload: {
      partyId: parseInt(id, 10)
    }
  };
}

export default {
  joinLine, leaveLine
};
