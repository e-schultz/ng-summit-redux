export const ORDER_STARTED = 'ORDER_STARTED';
export const ORDER_COMPLETED = 'ORDER_COMPLETED';
export const ORDER_DELIVERED = 'ORDER_DELIVERED';
export const PARTY_SEATED = 'PARTY_SEATED';
export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
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
  console.log('yo -', tableId, menuItemId);
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
export default {
  startOrder, completeOrder, deliverOrder, seatParty, addItemToOrder, removeItemFromOrder
};
