/* beautify preserve:start */
import globalDebug from './global-debug';
import lineup from './lineup';
import main from './main';
/* beautify preserve:end */

export default angular
  .module('app.components', [
    globalDebug,
    lineup,
    main
  ])
  .name;
