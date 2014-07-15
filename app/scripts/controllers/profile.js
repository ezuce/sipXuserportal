(function(){
'use strict';

uw.controller('profile', [
  '$sce',
  '$rootScope',
  '$scope',
  'restService',
  'sharedFactory',
  function ($sce, $rootScope, $scope, restService, sharedFactory) {

    var templates                 = sharedFactory.settings.miniTemplates;
    var profile                   = restService.cred;

    $scope.name                   = restService.cred;
    $scope.isUserProfileVisible   = false;
    $scope.template               = templates[0];

  }
]);
})();
