/* beautify preserve:start */
import mainTemplate from '../components/main/main-tpl.html';
/* beautify preserve:end */
export default function routerConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/app');

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
    })
    .state('app.orders', {
      url: '/orders',
      abstract: true,
      views: {
        'orders@app': {
          template: '<div ui-view="orders"></div>',
          controller: 'OrdersController',
          controllerAs: 'orders'
        }
      }

    })
    .state('app.orders.pending', {
      url: '/pending',
      views: {
        'orders@app.orders': {
          template: '<pending-orders orders="orders.pending"></pending-orders>'
        }
      }
    }).state('app.orders.completed', {
      url: '/completed',
      views: {
        'orders@app.orders': {
          template: `<completed-orders 
            orders="orders.completed"
            on-add-item-to-order="orders.addItemToOrder(tableId,menuItemId)"
            on-remove-item-from-order="orders.removeItemFromOrder(tableId,menuItemId)"
            on-deliver-order="orders.deliverOrder(tableId)">
            </completed-orders>`
        }
      }
    }).state('app.orders.delivered', {
      url: '/delivered',
      views: {
        'orders@app.orders': {
          template: 'delivered'
        }
      }
    });

}

routerConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
