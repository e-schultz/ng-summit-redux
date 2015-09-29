/* beautify preserve:start */
import table from './table-reducer';
import {PARTY_SEATED, BILL_PAID, TABLE_CLEANED} from '../actions/table-actions.js';
import {INITIAL_STATE} from './table-reducer';
import {CLEAN, DIRTY, OCCUPIED} from '../constants';
/* beautify preserve:end */

describe('the table reducer', () => {
  

  it('should be created with an initial state', () => {

    const initialState = table(undefined, 'reduxInitAction');

    expect(initialState).to.deep.equal(INITIAL_STATE);
  });

  it('should set the table to occupied when a party is seated', () => {
    const initialState = table(undefined, 'reduxInitAction');
    const seatedEvent = {
      type: PARTY_SEATED,
      payload: {
        partyId: 1,
        tableId: 1

      }
    };
    const nextState = table(initialState, seatedEvent);
    expect(nextState[0].status).to.equal(OCCUPIED);

  });

  it('should set the table to dirty after the customer has paid', () => {
    const initialState = table(undefined, 'reduxInitAction');
    const paidEvent = {
      type: BILL_PAID,
      payload: {
        tableId: 1

      }
    };
    const nextState = table(initialState, paidEvent);
    expect(nextState[0].status).to.equal(DIRTY);

  });

  it('should set the table to clean after it has been cleaned', () => {
    const dirtyState = [{
      id: 1,
      status: DIRTY
    }];

    const initialState = table(dirtyState, 'reduxInitAction');
    const cleanedEvent = {
      type: TABLE_CLEANED,
      payload: {
        tableId: 1

      }
    };
    const nextState = table(initialState, cleanedEvent);

    expect(nextState[0].status).to.equal(CLEAN);
  });

});
