'use strict';

describe('unit: testing chat service', function () {

  beforeEach(angular.mock.module('webchat'));

  it('should contain an chat service', inject(function (chatService) {
    expect(chatService).toBeDefined();
  }));

  it('should provide an init method and that method should connect to HTTP Binding service', inject(function (chatService) {
    var bind = 'http://adrian.ezuce.ro:5280/http-bind/';
    expect(chatService.init).toBeDefined();

    var init = chatService.init(bind);
    expect(init).not.toBe(null);
  }));

  it('should provide a valid JID', inject(function (chatService) {
    var jid = 'test@openuc.ezuce.com/oucxwebchat';
    expect(chatService.getValidJid).toBeDefined();

    var getValidJid = chatService.getValidJid(jid);
    expect(getValidJid.length).toBeGreaterThan(0);
  }));

  it('should provide XML unescape functionality', inject(function (chatService) {
    var text = '&amp;&gt;&lt;&apos;&quot;';
    expect(chatService.xmlunescape).toBeDefined();

    var xmlunescape = chatService.xmlunescape(text);
    expect(xmlunescape).toBe('&><\'"');
  }));

});
