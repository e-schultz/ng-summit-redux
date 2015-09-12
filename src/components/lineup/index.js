import angular from 'angular';
import LineupController from './lineup-controller';
import lineupTemplate from './lineup-tpl.html';

export default angular
  .module('app.components.lineup', [])
  .directive('lineup', () => {
    return {
      restrict: 'E',
      controller: LineupController,
      controllerAs: 'lineup',
      bindToController: true,
      template: lineupTemplate,
      scope: {}
    };
  })
  .name;
