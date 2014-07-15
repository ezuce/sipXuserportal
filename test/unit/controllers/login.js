'use strict';

describe('unit: testing login controller', function () {
  var scope;

  beforeEach(angular.mock.module('webchat'));

  it('should contain a login controller', inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var ctrl = $controller('loginController', {$scope: scope});
    expect(ctrl).toBeDefined();
  }));

  it('should have a submit method', inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var ctrl = $controller('loginController', {$scope: scope});
    expect(scope.submit).toBeDefined();
  }));

});
