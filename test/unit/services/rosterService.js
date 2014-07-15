'use strict';

describe('unit: testing roster service', function () {

  beforeEach(angular.mock.module('webchat'));

  it('should contain a roster service', inject(function (rosterService) {
    expect(rosterService).toBeDefined();
  }));

  it('should set the roster based on response from server', inject(function (rosterService) {
    var temp = '<body xmlns="http://jabber.org/protocol/httpbind" stream="f36d5f73-309f-4de2-87cf-f10676eb7d30"><iq type="result" id="4989" to="astanescu@ezuce.com/oucxwebchat" xmlns:stream="http://etherx.jabber.org/streams" xmlns="jabber:client" version="1.0"><query xmlns="jabber:iq:roster"><item jid="ddeutschman@ezuce.com" name="Dave Deutschman" subscription="both"><group>All_eZuce</group></item></query></iq></body>';
    var result = '{"ddeutschman@ezuce.com":{"jid":"ddeutschman@ezuce.com","name":"Dave Deutschman","resources":{},"profile":{"jid":"ddeutschman@ezuce.com","fn":"","givenName":"","middleName":"","familyName":"","photoType":"","photoBin":""},"groups":[""]}}';
    rosterService.set(temp);
    expect(JSON.stringify(rosterService.roster)).toBe(result);
  }));

});
