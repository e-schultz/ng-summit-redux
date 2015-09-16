export default class OrdersController {
  constructor($ngRedux, $scope) {

    let _updateOn = (state) => {
      console.log(state);
      return {
        pendingOrders: [],
        completedOrders: [],
        deliveredOrders: []
      };
    };

    let disconnect = $ngRedux.connect(_updateOn)(this);

    $scope.$on('$destroy', () => disconnect());

  }

}
