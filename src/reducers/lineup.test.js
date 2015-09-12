/* beautify preserve:start */
import lineup from './lineup';
import Immutable from 'immutable';
import {fromJS} from 'immutable';
/* beautify preserve:end */

describe('the lineup reducer', () => {

  it('should be created with an initial state', () => {
    const expectedState = fromJS({parties:[]});
    let state = lineup(undefined,'reduxInitAction');
    expect(Immutable.is(expectedState,state)).to.be.true;
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

 */
