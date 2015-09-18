/* beautify preserve:start */
import * as lineupActions from './lineup-actions';
import {fromJS} from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
/* beautify preserve:end */

describe('the lineup actions', () => {

  beforeEach(() => {

  });

  it.only('should create a FSA for joining the line', () => {
    lineupActions.joinLine(4)((action) => {
      expect(action).to.deep.equal({
        type: lineupActions.PARTY_JOINED,
        payload: {
          partyId: 1,
          numberOfPeople: 4
        }
      });
    }, () => {
      return {
        lineup: fromJS({
          parties: []
        })
      };
    });

  });

  it('should keep track of the party id locally for now', () => {

    const firstJoin = lineupActions.joinLine(4);
    const secondJoin = lineupActions.joinLine(1);

    expect(firstJoin.payload.partyId).to.equal(1);
    expect(secondJoin.payload.partyId).to.equal(2);

  });
  it('should create a FSA for leaving the line', () => {
    const leaveLine = lineupActions.leaveLine(1);
    expect(leaveLine).to.deep.equal({
      type: lineupActions.PARTY_LEFT,
      payload: {
        partyId: 1
      }
    });
  });

  it('should convert the number of people to an integer', () => {
    const joinLine = lineupActions.joinLine('5');
    expect(joinLine.payload.numberOfPeople).to.equal(5);

  });

});
