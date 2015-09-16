/* beautify preserve:start */
import {ORDERED} from '../../reducers/table-reducer';
/* beautify preserve:end */
export default class CompletedOrdersController {
  constructor($ngRedux, $scope, tableActions) {

    let _onChange = (state) => {
      let pendingOrders = state.tables.filter(n => n.get('status') === ORDERED);
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

    let disconnect = $ngRedux.connect(_onChange, tableActions)(this);

    $scope.$on('$destroy', () => disconnect());
  }
};

/*


 */
