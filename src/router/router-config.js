/* beautify preserve:start */
import mainTemplate from '../components/main/main-tpl.html';
/* beautify preserve:end */
export default function routerConfig($urlRouterProvider, $stateProvider) {
  
  $stateProvider
    .state('app', {
      url: '/app?debug_session',
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
