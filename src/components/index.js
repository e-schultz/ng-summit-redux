/* beautify preserve:start */
import globalDebug from './global-debug';
import lineup from './lineup';
import main from './main'; 
import lineupSummary from './lineup-summary';
import diningRoom from './dining-room';
import tables from './tables';
import removeItem from './remove-item';
import addItem from './add-item';
// import orders from './orders-v1'; 
 import orders from './orders-v2'; 
//import orders from './orders-v3'; 
import menu from './menu';
/* beautify preserve:end */

export default angular
  .module('app.components', [
    globalDebug,
    lineup,
    main,
    lineupSummary,
    diningRoom,
    tables,
    orders,
    removeItem,
    addItem,
    menu
  ])
  .name;
