'use strict';

describe('unit: testing strophe module', function () {

  beforeEach(angular.mock.module('strophe'));

  it('should contain a strophe factory', inject(function (Strophe) {
    expect(Strophe).toBeDefined();
  }));

});
