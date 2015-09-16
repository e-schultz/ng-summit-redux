/* beautify preserve:start */
import angular from 'angular';
import lineupActions from './lineup-actions';
import tableActions from './table-actions';
/* beautify preserve:end */
export default angular
  .module('app.actions', [])
  .factory('lineupActions',() => lineupActions)
  .factory('tableActions',() => tableActions)
  .name;
