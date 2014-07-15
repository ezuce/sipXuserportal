(function(window, document, undefined) {
'use strict';

var uniteWeb = angular.module('uw', ['ngAnimate', 'ngSanitize', 'ngCookies', 'ngRoute', 'config', 'emoji', 'underscore', 'LocalStorageModule', 'notify', 'xml', 'dragAndDrop']);

uniteWeb.config([
  '$routeProvider',
  '$httpProvider',
  '$compileProvider',
  '$provide',
  function ($routeProvider, $httpProvider, $compileProvider, $provide) {
    $routeProvider.
      when('/login', {
        templateUrl: 'views/login.html',
        controller:[
          '$location',
          'restService',
          function ($location, restService) {
            if (restService.connected)
              $location.path('/main');
          }
        ]
      }).
      when('/main', {
        templateUrl: 'views/main.html',
        controller: [
          '$scope',
          '$location',
          'restService',
          function ($scope, $location, restService) {
            if (!restService.connected) {
              $location.path('/login');
            } else {
              $scope.received = true;
            }
          }
        ]
      }).
      otherwise({redirectTo: '/login'});

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https|blob|mailto):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

    // https://github.com/angular/angular.js/issues/1404
    $provide.decorator('ngModelDirective', function($delegate) {
      var ngModel = $delegate[0], controller = ngModel.controller;
      ngModel.controller = ['$scope', '$element', '$attrs', '$injector', function(scope, element, attrs, $injector) {
        var $interpolate = $injector.get('$interpolate');
        attrs.$set('name', $interpolate(attrs.name || '')(scope));
        $injector.invoke(controller, this, {
          '$scope': scope,
          '$element': element,
          '$attrs': attrs
        });
      }];
      return $delegate;
    });
    // https://github.com/angular/angular.js/issues/1404
    $provide.decorator('formDirective', function($delegate) {
      var form = $delegate[0], controller = form.controller;
      form.controller = ['$scope', '$element', '$attrs', '$injector', function(scope, element, attrs, $injector) {
        var $interpolate = $injector.get('$interpolate');
        attrs.$set('name', $interpolate(attrs.name || attrs.ngForm || '')(scope));
        $injector.invoke(controller, this, {
          '$scope': scope,
          '$element': element,
          '$attrs': attrs
        });
      }];
      return $delegate;
    });
  }
]);

window.uw = uniteWeb;

// expose uw as an AMD module
if (typeof define === 'function' && define.amd) {
    define(uw);
}

})(window, document);
