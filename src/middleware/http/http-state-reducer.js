import { HTTP_REQUEST, HTTP_REQUEST_SUCCESS, HTTP_REQUEST_FAIL } from './http-actions';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  isRequesting: false
});

/**
 * Reducer of HTTP_REQUEST actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function httpStateReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HTTP_REQUEST:
      return state.set('isRequesting', true);
    case HTTP_REQUEST_SUCCESS:
      return state.set('isRequesting', false);
    case HTTP_REQUEST_FAIL:
      return state.set('isRequesting', false);
    default:
      return state;
  };
}
