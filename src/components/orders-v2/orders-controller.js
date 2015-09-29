/* beautify preserve:start */
import * as R from 'ramda';
import {ORDERING, ORDERED} from '../../constants';
import tableActions from '../../actions/table-actions';
/* beautify preserve:end */

export default class OrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => this.onUpdate(state), tableActions)(this);

    $scope.$on('$destroy', disconnect);
  }

  onUpdate(state) {
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

    return {
      pending: orderMap(state.menu, R.filter(n => n.status === ORDERING)(state.tables)),
      completed: orderMap(state.menu, R.filter(n => n.status === ORDERED)(state.tables))
    };
  }
}
