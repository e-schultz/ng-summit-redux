/* beautify preserve:start */

import {
  ITEM_ADDED,
  ITEM_REMOVED,
 }
from '../actions/table-actions.js';
import {fromJS, List} from 'immutable';

/* beautify preserve:end */

const INITIAL_STATE = [{
  menuId: 'pancake',
  description: 'Stack of Pancakes',
  stock: 50,
  price: 1.99
}, {
  menuId: 'fruitbowl',
  description: 'Bowl of fresh fruit',
  stock: 10,
  price: 3.50
}, {
  menuId: 'eggsbenny',
  description: 'Eggs Benedict',
  stock: 30,
  price: 4.95
}, {
  menuId: 'hashbrowns',
  description: 'Crispy Golden Hashbrowns',
  stock: 10,
  price: 2.50
}];

let findIndex = (collection, id) => collection.findIndex(n => n.get('menuId') === id);
export default function menu(state = INITIAL_STATE, action) {
  /*
  Typically if using ImmutableJS, we would want to keep things
  as immutable throughout the application.

  For clarity of the examples, we are doing toJS/fromJS within the reducer
  so our component code is easier to follow, and only using immutableJS
  here to provide an easy way to do updates to our collection in an
  immutable fashion
   */
  state = List.isList(state) ? state : fromJS(state);

  if (!action.type || !action.payload) {
    return state.toJS();
  }

  let menuIndex = findIndex(state, action.payload.menuItemId);

  switch (action.type) {
  case ITEM_REMOVED:
    return state.updateIn([menuIndex, 'stock'], 0, value => value + 1).toJS();
  case ITEM_ADDED:
    return state.updateIn([menuIndex, 'stock'], 0,
      value => value === 0 ? 0 : value - 1).toJS();
  default:
    return state.toJS();
  }

}
