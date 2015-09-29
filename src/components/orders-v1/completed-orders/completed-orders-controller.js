/* beautify preserve:start */
import {ORDERED} from '../../../constants';
import tableActions from '../../../actions/table-actions';
import * as R from 'ramda';
/* beautify preserve:end */
export default class CompletedOrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state), tableActions)(this);

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
    let completedOrders = R.filter(n => n.status === ORDERED)(state.tables);
    return {
      orders: R.map(order => this.mapOrders(order, state.menu))(completedOrders)
    };
  }
};


