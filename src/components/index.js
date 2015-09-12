/* beautify preserve:start */
import globalDebug from './global-debug';
import lineup from './lineup';
import main from './main'; 
import lineupSummary from './lineup-summary';
/* beautify preserve:end */

export default angular
  .module('app.components', [
    globalDebug,
    lineup,
    main,
    lineupSummary
  ])
  .name;
