import angular from 'angular';
import LineupSummaryController from './lineup-summary-controller';
import lineupSummaryTemplate from './lineup-summary-tpl.html';

export default angular
  .module('app.components.lineupSummary', [])
  .directive('lineupSummary', () => {
    return {
      restrict: 'E',
      controller: LineupSummaryController,
      controllerAs: 'lineupSummary',
      bindToController: true,
      template: lineupSummaryTemplate,
      scope: {}
    };
  })
  .name;
