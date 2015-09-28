/* beautify preserve:start */
import tableActions from '../../actions/table-actions';
import ordersSelector from './orders-selector';
/* beautify preserve:end */

export default class OrdersController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(state => ordersSelector(state), tableActions)(this);

    $scope.$on('$destroy', disconnect);
  }

}
