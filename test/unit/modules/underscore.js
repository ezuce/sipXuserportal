'use strict';

describe('unit: testing underscore module', function () {

  beforeEach(angular.mock.module('underscore'));

  it('should contain an underscore factory', inject(function (_) {
    expect(_).toBeDefined();
  }));

});
