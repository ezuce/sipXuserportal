'use strict';

describe('unit: testing emoji module', function () {

  beforeEach(angular.mock.module('emoji'));

  it('should contain an emoji constant', inject(function (EMOJI) {
    expect(EMOJI).toBeDefined();
  }));

});
