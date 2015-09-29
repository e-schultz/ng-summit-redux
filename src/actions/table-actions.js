export const ORDER_STARTED = 'ORDER_STARTED';
export const ORDER_COMPLETED = 'ORDER_COMPLETED';
export const ORDER_DELIVERED = 'ORDER_DELIVERED';
export const PARTY_SEATED = 'PARTY_SEATED';
export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const BILL_PAID = 'BILL_PAID';
export const TABLE_CLEANED = 'TABLE_CLEANED';

/*
The action creators are sort of like the command saying 'to do' something.
The event (ie: type) that is returned as a result is the 'what was done',
this is what gets sent to your reducers later on, and should reflect
what has happened in the system.

*/
export function seatParty(partyId, tableId) {

  return {
    type: PARTY_SEATED,
    payload: {
      partyId: parseInt(partyId, 10),
      tableId: parseInt(tableId, 10)
    }
  };
}
export function startOrder(tableId) {
  return {
    type: ORDER_STARTED,
    payload: {
      tableId: parseInt(tableId, 10)
    }
  };
}

export function completeOrder(tableId) {

  return {
    type: ORDER_COMPLETED,
    payload: {
      tableId: parseInt(tableId, 10)
    }
  };
}

export function deliverOrder(tableId) {
  return {
    type: ORDER_DELIVERED,
    payload: {
      tableId: parseInt(tableId, 10)
    }
  };
}

export function addItemToOrder(tableId, menuItemId) {

  return {
    type: ITEM_ADDED,
    payload: {
      tableId: parseInt(tableId, 10),
      menuItemId: menuItemId
    }
  };
}

export function removeItemFromOrder(tableId, menuItemId) {
  return {
    type: ITEM_REMOVED,
    payload: {
      tableId: parseInt(tableId, 10),
      menuItemId: menuItemId
    }
  };
}

export function payBill(tableId) {
  return {
    type: BILL_PAID,
    payload: {
      tableId: parseInt(tableId, 10)
    }
  };
}

export function cleanTable(tableId) {
  return {
    type: TABLE_CLEANED,
    payload: {
      tableId: parseInt(tableId, 10)
    }
  };
}

export default {
  startOrder,
  completeOrder,
  deliverOrder,
  seatParty,
  addItemToOrder,
  removeItemFromOrder,
  payBill,
  cleanTable
};
