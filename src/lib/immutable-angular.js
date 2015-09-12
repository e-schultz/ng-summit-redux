// todo - src of this & credit
import memoize from 'memoizee';
import Immutable from 'immutable';

var mutableFilter = function mutableFilter() {
  function toMutable(js) {
    return js.toArray();
  };
  var memoizedMutable = memoize(toMutable, 10);

  return function (val) {
    if (val instanceof Immutable.Collection) {
      return memoizedMutable(val);
    }
    return val;
  };
};

var immutableDirective = function ($parse) {
  return {
    restrict: 'EA',
    link: function link(scope, element, attrs) {
      // Check if simple or object syntax
      if (attrs.immutable.indexOf('{') > -1) {
        (function () {
          var object = $parse(attrs.immutable)();
          angular.forEach(Object.keys(object), function (key) {
            scope.$watch(function () {
              return $parse(key)(scope);
            }, function (val) {
              if (val) {
                scope[object[key]] = val.toJS();
              }
            });
          });
        })();
      } else {
        scope.$watch(function () {
          return $parse(attrs.immutable)(scope);
        }, function (val) {
          if (val) {
            scope.mutable = val.toJS();
          }
        });
      }
    }
  };
};

export default angular.module('mutable', [])
  .filter('mutable', [mutableFilter])
  .directive('immutable', ['$parse', immutableDirective])
  .name;
