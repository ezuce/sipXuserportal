'use strict';

describe('unit: testing auth service', function () {

  beforeEach(angular.mock.module('webchat'));

  it('should contain an auth service', inject(function (authService) {
    expect(authService).toBeDefined();
  }));

  it('should contain a username and password', inject(function (authService) {
    expect(authService.username).toBeDefined();
    expect(authService.password).toBeDefined();
  }));

  it('should contain init and login methods', inject(function (authService) {
    expect(authService.init).toBeDefined();
    expect(authService.login).toBeDefined();
  }));

});
