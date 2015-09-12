/* beautify preserve:start */
import angular from 'angular';
import lineupActions from './lineup-actions';
/* beautify preserve:end */
export default angular
  .module('app.actions', [])
  .factory('lineupActions',() => lineupActions)
  .name;
