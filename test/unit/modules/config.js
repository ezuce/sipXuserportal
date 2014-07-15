'use strict';

describe('unit: testing config module', function () {

  beforeEach(angular.mock.module('config'));

  it('should contain a config constant', inject(function (CONFIG) {
    expect(CONFIG).toBeDefined();
  }));

});
