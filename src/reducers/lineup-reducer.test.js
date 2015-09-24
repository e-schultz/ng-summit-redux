/* beautify preserve:start */
import lineup from './lineup-reducer';
//import Immutable from 'immutable';
import {fromJS} from 'immutable';
import {PARTY_LEFT,PARTY_JOINED} from '../actions/lineup-actions.js';
import {PARTY_SEATED} from '../actions/table-actions.js';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
/* beautify preserve:end */

describe('the lineup reducer', () => {

  it('should be created with an initial state', () => {

    const expectedState = [];

    const initialState = lineup(undefined, 'reduxInitAction');

    expect(initialState).to.deep.equal(expectedState);
  });

  it('should allow parties to join the lineup', () => {
    const initialState = lineup(undefined, 'reduxInitAction');
    const expectedState = [{
      partyId: 1,
      numberOfPeople: 2
      }];

    const partyJoined = {
      type: PARTY_JOINED,
      payload: {
        partyId: 1,
        numberOfPeople: 2
      }
    };

    const nextState = lineup(initialState, partyJoined);
    expect(nextState).to.deep.equal(expectedState);

  });

  context('there is an existing lineup', () => {
    const THREE_PARTY_STATE = [{
        partyId: 1,
        numberOfPeople: 2
          },
      {
        partyId: 2,
        numberOfPeople: 1
          }, {
        partyId: 3,
        numberOfPeople: 4
          }];

    it('should let parties be seated', () => {

      const initialState = lineup(THREE_PARTY_STATE, 'reduxInitAction');

      const partySeated = {
        type: PARTY_SEATED,
        payload: {
          partyId: 2
        }
      };

      const expectedState = [{
          partyId: 1,
          numberOfPeople: 2
          },
        {
          partyId: 3,
          numberOfPeople: 4
          }];

      const nextState = lineup(initialState, partySeated);

      expect(nextState).to.deep.equal(expectedState);

    });

    it('should let parties leave the line', () => {
      const initialState = lineup(THREE_PARTY_STATE, 'reduxInitAction');

      const partySeated = {
        type: PARTY_LEFT,
        payload: {
          partyId: 2
        }
      };

      const expectedState = [{
          partyId: 1,
          numberOfPeople: 2
          },
        {
          partyId: 3,
          numberOfPeople: 4
          }];

      const nextState = lineup(initialState, partySeated);

      expect(nextState).to.deep.equal(expectedState);
    });
  });

});

/*

Lets begin by creating the skeleton of our first reducer,
one of the key things with redux, is that we should not be mutating our state. While
it is possible to do this without Immutable, we will be using ImmutableJS to help
ensure that we do not mutate our state.

Lets get the basic lineup reducer started

// reducer v1
const INITIAL_STATE = fromJS({
  parties: []
});

export default function lineup(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    default: return state;
  }
}

///

now, lets start writing some unit tests for this 


describe('the lineup reducer', () => {

  it('should be created with an initial state', () => {
    const expectedState = fromJS({parties:[]});
    let state = lineup(undefined,'reduxInitAction');
    expect(Immutable.is(expectedState,state)).to.be.true;
  });
});


one of the nice things about taking this approach with redux, is a large part of your
code is no longer reliant on angular, and can create a majority of your application
and logic in a framework netural way.

Remeber how initially we did (blah blah blah) with the todoMVC earlier to demonstrate
the concepts behind redux - this can be used to help create and simplify our tests


---

Now, lets start with seeing how this should respond to actions
For now, lets just create the action export constants over in lineup-actions.js,
we wont worry about the actual action creators yet.
// 
export const PARTY_JOINED = '@@ngSummitRedux/partyJoined';
export const PARTY_LEFT = '@@ngSummitRedux/partyLeft';
export const PARTY_SEATED = '@@ngSummitRedux/partySeated';
//

The events that we expect to have is the ability for people to join the line, 
leave the line, or get seated.

we will be using the 'flux standard actions' action definition, which looks like

var fluxStandardAction = {
  type: // action type  - mandatory
  payload: // the data - optional
  metaData: // extra information - optional
  error: true/false - optional
}

a FSA, should not have any properties other than those above.

We will just manually construct this event like this..

Lets just scaffold out a failing test...

//
it('should allow parties to join the lineup', () => {
    const initialState = getInitialState();
    
    const expectedState = fromJS({
      parties:[{
        id: 1,
        numberOfPeople: 2
      }]
    });

    const joinPartyEvent = {
      type: PARTY_JOINED,
      payload: {
        id: 1,
        numberOfPeople: 2
      }
    };
    const nextState = lineup(initialState,joinPartyEvent);

    expect(Immutable.is(expectedState,nextState)).to.be.true;



  });

// blah blah

Ok, now we are going to setup a test for a party being seated.

For this, we are going to expect our initial state of the application to have to
parties in line.

One of the nice things with redux, and with a store that has no side effects - is it
will be easier to reconstruct the store as a series of events, this can make debugging
easier because ... {reasons}


// .... now that we have the reducer setup, lets go over to the lineup-actions
// file and flesh out the action creators, and the unit tests

 */
