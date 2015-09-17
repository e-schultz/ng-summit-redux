/* beautify preserve:start */
import {ORDERED} from '../../reducers/table-reducer';
import tableActions from '../../actions/table-actions';
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
        let menuItem = menu.find(menuItem => menuItem.get('menuId') === key);
        return {
          menuId: key,
          qty: value,
          description: menuItem.get('description'),
          price: menuItem.get('price'),
          total: value * menuItem.get('price')
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
