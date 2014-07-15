(function() {

  "use strict";

  angular.module("config", [])

  .constant("CONFIG", {
   "debug": true,
   "resource": "Unite Web",
   "resourcePriority": 5,
   "connectionRetryLimit": 5,
   "chatstatePausedTimeout": 20000,
   "chatstateInactiveTimeout": 120000,
   "chatstateGoneTimeout": 600000,
   "keyConversationList": "uw:conversations",
   "keyArchiveObj": "uw:archive",
   "keyRoster": "uw:roster",
   "keyRosterGroups": "uw:roster:phonebook",
   "keyGroupChats": "uw:groupchats",
   "keyPhotos": "uw:roster:photos",
   "groupless": "Buddies",
   "prefix": "ouc",
   "notify": {
    "setItem": true,
    "removeItem": false
   },
   "authCookie": "oucunitewebauth",
   "version": "1.0.1-beta1",
   "baseRest": "http://openuc.ezuce.com/sipxconfig/rest"
  })

  ;

})();
