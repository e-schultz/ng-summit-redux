import * as localStorage from 'store';
export const PARTY_JOINED = 'PARTY_JOINED';
export const PARTY_LEFT = 'PARTY_LEFT';

// TODO: Move this out somewhere else - pouchDB/etc?

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
      //numberOfPeople: parseInt(numberOfPeople, 10)
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
/*

Unless you are using middleware (which we will get to later...),  actions with redux
are just plain-old-JS objects,

-- reasons, seralize and such. 

So your actions should simply return POJO's, 

These are mostly helpers to wrap paramaters into the object. If you recall from
the lineup-reducer, we want the objects being returned to look something like

// this {}

Since these are plain objects, it also makes testing them really easy.

For now, we will just internally keep track/generate the next party ID - but later on
we will see how this could be moved to a side-effect caused by a server/http request


// something about commands vs events / actions vs events
----

Now at this point you are probably thinking 'I thought this was an angular conference,
yet I haven't seen any angular code yet', worry not - we will now look at how to start
hooking up redux into angular, using a binding library called ng-redux.

// onto src/index.js stuffs?


 */
