export default class Tables {
  constructor() {
    // console.log(this.addItemToOrder({tableId: 1, menuItemId: 2}));
  }
  removeItem(tableId, menuItemId) {

    this.removeItemFromOrder({
      tableId: tableId,
      menuItemId: menuItemId
    });
  }
  addItem(tableId, menuItemId) {

    this.addItemToOrder({
      tableId: tableId,
      menuItemId: menuItemId
    });
  }
  finishOrder(tableId) {
    
    this.completeOrder({tableId});
  }
}
