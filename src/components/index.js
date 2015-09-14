/* beautify preserve:start */
import globalDebug from './global-debug';
import lineup from './lineup';
import main from './main'; 
import lineupSummary from './lineup-summary';
import diningRoom from './dining-room';
/* beautify preserve:end */

export default angular
  .module('app.components', [
    globalDebug,
    lineup,
    main,
    lineupSummary,
    diningRoom
  ])
  .name;
