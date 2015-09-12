/* beautify preserve:start */
import mainTemplate from '../components/main/main-tpl.html';
/* beautify preserve:end */
export default function routerConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/app');

  $stateProvider
    .state('app', {
      url: '/app',
      views: {
        '': {
          template: mainTemplate,
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    });
    
}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
