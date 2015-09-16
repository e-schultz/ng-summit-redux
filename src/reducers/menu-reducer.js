/* beautify preserve:start */
import {fromJS} from 'immutable';

/* beautify preserve:end */

const INITIAL_STATE = fromJS([{
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
}]);

export default function lineup(state = INITIAL_STATE, action) {

  switch (action.type) {
    default: return state;
  }

}
