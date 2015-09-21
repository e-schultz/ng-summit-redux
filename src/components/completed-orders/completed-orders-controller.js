/* beautify preserve:start */
import {ORDERED} from '../../constants';
import tableActions from '../../actions/table-actions';
import * as R from 'ramda';
/* beautify preserve:end */
export default class CompletedOrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state), tableActions)(this);

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
    let pendingOrders = state.tables.filter(n => n.get('status') === ORDERED);
    return {
      orders: pendingOrders.map(order => this.mapOrders(order, state.menu))
    };
  }
};

/*


 */
