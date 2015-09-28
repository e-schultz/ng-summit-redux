/* beautify preserve:start */

import ordersSelector from './orders-selector';
import {menuSelector, pendingOrders, completedOrders} from './orders-selector';
import {ORDERING, ORDERED} from '../../constants';

/* beautify preserve:end */

describe.only('the orders selector', () => {
  describe('the menu selector', () => {
    it('should return the menu from the state object', () => {
      const state = {
        menu: [{
          menuId: 'test '
        }]
      };

      const result = menuSelector(state);
      expect(result).to.be.deep.equal(state.menu);
    });
  });

  describe('pendingOrders', () => {
    it('should only return items that have a pending order status', () => {
      const state = {
        tables: [{
          status: ORDERING
        }, {
          status: ORDERED
        }]
      };

      const result = pendingOrders(state);
      expect(result.length).to.equal(1);
      expect(result[0].status).to.equal(ORDERING);

    });
  });

  describe('completedOrders', () => {
    it('should only return items that have a pending order status', () => {
      const state = {
        tables: [{
          status: ORDERING
        }, {
          status: ORDERED
        }]
      };

      const result = completedOrders(state);
      expect(result.length).to.equal(1);
      expect(result[0].status).to.equal(ORDERED);

    });
  });

  describe('orders selector', () => {
    let mockState;
    beforeEach(() => {
      mockState = {
        menu: [{
          menuId: 'pancake',
          description: 'Stack of Pancakes',
          stock: 50,
          price: 1.99
        }],
        tables: [{
            id: 'tableWithPending',
            order: {
              pancake: 1
            },
            status: ORDERING
          },
          {
            id: 'tableWithCompleted',
            order: {
              pancake: 2
            },
            status: ORDERED

        }]
      };
    });

    it('should return a collection of pending and completed orders', () => {
      const result = ordersSelector(mockState);
      expect(result).to.have.property('pending');
      expect(result).to.have.property('completed');
      expect(result.pending[0].tableId).to.equal('tableWithPending');
      expect(result.completed[0].tableId).to.equal('tableWithCompleted');
    });

    it('should convert order to a collection of items', () => {
      const result = ordersSelector(mockState);
      let pendingOrders = result.pending[0];
      let completedOrders = result.completed[0];
      expect(pendingOrders).to.have.property('items');
      expect(completedOrders).to.have.property('items');

    });
    it('should calculate the total of the items in the order', () => {
      const result = ordersSelector(mockState);
      let pendingItems = result.pending[0].items;
      let completedItems = result.completed[0].items;
      expect(pendingItems[0].total).to.be.equal(1.99);
      expect(completedItems[0].total).to.be.equal(1.99 * 2);

    });

  });
});
