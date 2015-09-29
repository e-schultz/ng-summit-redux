/* beautify preserve:start */
import ordersSelector from './orders-selector';
import {ORDERING, ORDERED} from '../../constants';
/* beautify preserve:end */

describe('the orders selector', () => {
  
  const mockState = {
      menu: [{
        menuId: 'pancake', description: 'Stack of Pancakes',
        stock: 50, price: 1.99
        }],
      tables: [{
        id: 'tableWithPending', status: ORDERING,
        order: {pancake: 1}
          },
        {
        id: 'tableWithCompleted',  status: ORDERED, 
        order: {pancake: 2}
        }]
    };
  

  it('should return a collection of pending and completed orders', () => {
    const result = ordersSelector(mockState);
    expect(result).to.have.property('pending');
    expect(result).to.have.property('completed');
    expect(result.pending[0].tableId).to.equal('tableWithPending');
    expect(result.completed[0].tableId).to.equal('tableWithCompleted');
  });

  it('should convert order to a collection of items', () => {
    
    const result = ordersSelector(mockState);
    
    const pendingOrders = result.pending[0];
    const completedOrders = result.completed[0];
    
    expect(pendingOrders).to.have.property('items');
    expect(completedOrders).to.have.property('items');

  });
  it('should calculate the total of the items in the order', () => {
  
    const result = ordersSelector(mockState);
    
    const pendingItems = result.pending[0].items;
    const completedItems = result.completed[0].items;
    
    expect(pendingItems[0].total).to.be.equal(1.99);
    expect(completedItems[0].total).to.be.equal(1.99 * 2);

  });

});
