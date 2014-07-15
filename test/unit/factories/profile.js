'use strict';

describe('unit: testing profile factory', function () {

  beforeEach(angular.mock.module('webchat'));

  it('should contain a profile factory', inject(function (ProfileFactory) {
    expect(ProfileFactory).toBeDefined();
  }));

  it('should return a full user profile', inject(function (ProfileFactory) {
    var jid = '';
    var profile = new ProfileFactory(jid);
    expect(profile).toEqual(jasmine.any(Object));

    profile.nGiven = 'testname';
    var fullName = profile.fullName();
    expect(fullName).toBe('testname');

    var photoSrc = profile.photoSrc();
    expect(photoSrc).toBe(null);
  }));

});
