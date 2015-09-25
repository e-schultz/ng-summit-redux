/* beautify preserve:start */
import {createSelector} from 'reselect';
import * as R from 'ramda';
import {ORDERING, ORDERED} from '../../constants';
/* beautify preserve:end */

let orderMap = (menu, tables) => {

  return R.map(table => {
    return {
      tableId: table.id,
      items: Object.keys(table.order || {}).map(function (key) {
        let menuItem = R.find(menuItem => menuItem.menuId === key)(menu);
        return {
          menuId: key,
          qty: table.order[key],
          description: menuItem.description,
          price: menuItem.price,
          total: table.order[key] * menuItem.price
        };
      })
    };
  })(tables);
};

let menuSelector = state => state.menu;
let pendingOrders = state => R.filter(n => n.status === ORDERING)(state.tables);
let completedOrders = state => R.filter(n => n.status === ORDERED)(state.tables);

let orderedSelector = createSelector(
  [menuSelector, completedOrders], (menu, orders) => orderMap(menu, orders));

let pendingSelector = createSelector(
  [menuSelector, pendingOrders], (menu, orders) => orderMap(menu, orders));

let ordersSelector = createSelector([pendingSelector, orderedSelector], (pendingOrders, completedOrders) => ({
  pendingOrders, completedOrders
}));

export default class OrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state))(this);

    $scope.$on('$destroy', disconnect);
  }

  onUpdate(state) {
    return ordersSelector(state);

  }

}