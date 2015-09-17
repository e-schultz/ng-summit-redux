/* beautify preserve:start */
import {ORDERING} from '../../reducers/table-reducer';
/* beautify preserve:end */
export default class PendingOrdersController {
  constructor($ngRedux, $scope) {

    let _onChange = (state) => {
      let pendingOrders = state.tables.filter(n => n.get('status') === ORDERING);
      return {
        orders: pendingOrders.map(n => {
          return {
            tableId: n.get('id'),
            items: n.get('order').map((value, key) => {
              let menuItem = state.menu.find(menuItem => menuItem.get('menuId') === key);
              return {
                menuId: key,
                qty: value,
                description: menuItem.get('description'),
                price: menuItem.get('price'),
                total: value * menuItem.get('price')
              };

            }).toArray()

          };
        })
      };
    };

    let disconnect = $ngRedux.connect(_onChange)(this);

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
    let pendingOrders = state.tables.filter(n => n.get('status') === ORDERING);
    return {
      orders: pendingOrders.map(order => this.mapOrders(order, state.menu))
    };
  }
};

/*


 */
