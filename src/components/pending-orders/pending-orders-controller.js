/* beautify preserve:start */
import {ORDERING} from '../../constants';
import * as R from 'ramda';
/* beautify preserve:end */
export default class PendingOrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state))(this);
    $scope.$on('$destroy', () => disconnect());
  }

  mapOrders(order, menu) {
    return {
      tableId: order.get('id'),
      items: order.get('order').map((value, key) => {
        let menuItem = R.find(menuItem => menuItem.menuId === key)(menu);
        return {
          menuId: key,
          qty: value,
          description: menuItem.description,
          price: menuItem.price,
          total: value * menuItem.price
        };
      }).toArray()
    };
  }
  onUpdate(state) {
    let pendingOrders = state.tables.filter(n => n.get('status') === ORDERING);
    return {
      orders: pendingOrders.map(order => this.mapOrders(order, state.menu))
    };
  }
};

/*


 */
