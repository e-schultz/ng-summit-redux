/* beautify preserve:start */
import {ORDERING} from '../../../constants';
import * as R from 'ramda';
/* beautify preserve:end */
export default class PendingOrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state))(this);
    $scope.$on('$destroy', () => disconnect());
  }

  mapOrders(order, menu) {

    return {
      tableId: order.id,
      items: R.mapObjIndexed((value, key) => {
        let menuItem = R.find(menuItem => menuItem.menuId === key)(menu);
        return {
          menuId: key,
          qty: value,
          description: menuItem.description,
          price: menuItem.price,
          total: value * menuItem.price
        };
      })(order.order)
    };

  }
  onUpdate(state) {
    let pendingOrders = R.filter(n => n.status === ORDERING)(state.tables);
    return {
      orders: R.map(order => this.mapOrders(order, state.menu))(pendingOrders)
    };
  }
};
