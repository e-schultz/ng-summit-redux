/* beautify preserve:start */
import table from './table-reducer';
import {fromJS} from 'immutable';
import {PARTY_SEATED} from '../actions/lineup-actions.js';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import {INITIAL_STATE, CLEAN, DIRTY, OCCUPIED} from './table-reducer';
chai.use(chaiImmutable);
/* beautify preserve:end */

describe.only('the table reducer', () => {
  let findIndex = (collection, id) => collection.findIndex(n => n.get('id') === id);
  it('should be created with an initial state', () => {

    const initialState = table(undefined, 'reduxInitAction');

    expect(initialState).to.equal(INITIAL_STATE);
  });

  it('should set the table to occupied when a party is seated', () => {
    const initialState = table(undefined, 'reduxInitAction');
    const seatedEvent = {
      type: PARTY_SEATED,
      payload: {
        id: 1

      }
    };
    const nextState = table(initialState, seatedEvent);
    const tableIndex = findIndex(nextState, 1);
    expect(nextState.getIn([tableIndex, 'status'])).to.equal(OCCUPIED);
  });

  it('should set the table to dirty after the customer has paid', () => {
    const initialState = table(undefined, 'reduxInitAction');
    const paidEvent = {
      type: 'CUSTOMER_PAID',
      payload: {
        id: 1

      }
    };
    const nextState = table(initialState, paidEvent);
    const tableIndex = findIndex(nextState, 1);
    expect(nextState.getIn([tableIndex, 'status'])).to.equal(DIRTY);
  });

  it('should set the table to clean after it has been clened', () => {
    const dirtyState = fromJS([{
      id: 1,
      status: DIRTY
    }]);

    const initialState = table(dirtyState, 'reduxInitAction');
    const cleanedEvent = {
      type: 'TABLE_CLEANED',
      payload: {
        id: 1

      }
    };
    const nextState = table(initialState, cleanedEvent);
    const tableIndex = findIndex(nextState, 1);
    expect(nextState.getIn([tableIndex, 'status'])).to.equal(CLEAN);
  });

});
