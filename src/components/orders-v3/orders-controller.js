/* beautify preserve:start */
import {createSelector} from 'reselect';
import * as R from 'ramda';
import {ORDERING, ORDERED} from '../../constants';
import tableActions from '../../actions/table-actions';
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

let ordersSelector = createSelector([menuSelector, pendingOrders, completedOrders], (menu, pending, completed) => {
  return {
    pending: orderMap(menu, pending),
    completed: orderMap(menu, completed)
  };
});

export default class OrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state), tableActions)(this);

    $scope.$on('$destroy', disconnect);
  }

  onUpdate(state) {
    return ordersSelector(state);

  }

}
