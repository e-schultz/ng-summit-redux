import * as localStorage from 'store';
export const PARTY_JOINED = 'PARTY_JOINED';
export const PARTY_LEFT = 'PARTY_LEFT';

// temp function for testing for now
export function _resetIndex() {
  localStorage.set('partyId', 0);
}

function getNextPartyId() {
  let partyId = localStorage.get('partyId');
  partyId = partyId === []._ ? 1 : ++partyId;
  localStorage.set('partyId', partyId);
  return partyId;
}

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

