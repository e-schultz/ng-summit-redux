export const PARTY_JOINED = '@@ngSummitRedux/partyJoined';
export const PARTY_LEFT = '@@ngSummitRedux/partyLeft';
export const PARTY_SEATED = '@@ngSummitRedux/partySeated';

// TODO: Move this out somewhere else - pouchDB/etc?
let partyIndex = 0;

// temp function for testing for now
export function _resetIndex() {
  partyIndex = 0;
}

export function joinLine(numberOfPeople) {

  return {
    type: PARTY_JOINED,
    payload: {
      id: ++partyIndex,
      numberOfPeople
    }
  };

}

export function seatParty(id) {
  return {
    type: PARTY_SEATED,
    payload: {
      id
    }
  };
}

export function leaveLine(id) {
  return {
    type: PARTY_LEFT,
    payload: {
      id
    }
  };
}

export default {
  joinLine, seatParty, leaveLine
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
