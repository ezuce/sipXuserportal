(function(){
'use strict';

/**
 * creates user profile based on vCard
 * @param  {Object} strophe  angularjs DI of Strophe.js
 * @return {Object}          profile object
 */
uw.factory('profileFactory', [
  'strophe',
  function (strophe) {
    var profile = {};

    /**
     * initializez profile
     * @param  {String} jid       XMPP JID received from roster
     * @return {Object}           {jid: XMPP JID}
     */
    profile.init = function (jid) {
      return {
        jid: jid
      }
    }

    /**
     * returns .vCard Object
     * @param {NamedNodeMap} vCard      received from XMPP server
     * @param {Boolean} empty used for setting profiles
     */

    profile.set = function (vCard, empty) {
      var $       = angular.element;
      var self    = this;
      var parsed  = {};
      var isEmpty = empty;
      var jqEl;
      var text;

      _.each($(vCard).children(), function (el, idx) {
        jqEl = $(el);
        if (jqEl.children().length) {
          if (empty) {
            if ( !_.isEmpty( $(jqEl.children()[0]).text() ) )
              parsed[el.nodeName] = self.set(el, isEmpty);
          } else
            parsed[el.nodeName] = self.set(el);
        } else {
          text = jqEl.text();
          if (empty) {
            if (!_.isEmpty(text))
              parsed[el.nodeName] = text;
          } else
            parsed[el.nodeName] = text;
        }
      });
      // console.log(parsed);
      return parsed;
    }

    profile.util = {
      getFullName : function () {

      },
      getPhotoSrc : function () {

      },
      translate : function (text) {
        return makeHumanReadable(text);
        // var parsed = {};

        // _.each(obj.vCard, function (val, key) {
        //   k = makeHumanReadable(key);
        //   console.log(val);
        //   console.log(key);
        //   // if (typeof val === 'object')
        //   //   parsed[k]
        // })
      }
    }

    function makeHumanReadable(text) {
      var translated = text;
      var dict = [
        {vcard: 'ADR', human: 'Address'},
        {vcard: 'CTRY', human: 'Country'},
        {vcard: 'EXTADD', human: 'Extended-Address'},
        {vcard: 'HOME', human: 'Home'},
        {vcard: 'LOCALITY', human: 'Locality'},
        {vcard: 'PCODE', human: 'Postal-Code'},
        {vcard: 'REGION', human: 'Region'},
        {vcard: 'STREET', human: 'Street'},
        {vcard: 'BDAY', human: 'Birth-Day'},
        {vcard: 'DESC', human: 'Description'},
        {vcard: 'EMAIL', human: 'Email'},
        {vcard: 'INTERNET', human: 'Internet'},
        {vcard: 'PREF', human: 'Pref'},
        {vcard: 'USERID', human: 'User'},
        {vcard: 'FN', human: 'Full-Name'},
        {vcard: 'JABBERID', human: 'JabberID'},
        {vcard: 'N', human: 'Names'},
        {vcard: 'FAMILY', human: 'Family'},
        {vcard: 'GIVEN', human: 'Given'},
        {vcard: 'MIDDLE', human: 'Middle'},
        {vcard: 'NICKNAME', human: 'Nickname'},
        {vcard: 'ORG', human: 'Organization'},
        {vcard: 'ORGUNIT', human: 'Organizational Unit'},
        {vcard: 'PHOTO', human: 'Photo'},
        {vcard: 'BINVAL', human: 'Binary-Value'},
        {vcard: 'TYPE', human: 'Type'},
        {vcard: 'ROLE', human: 'Role'},
        {vcard: 'TEL', human: 'Telephone'},
        {vcard: 'HOME', human: 'Home-Phone'},
        {vcard: 'MSG', human: 'Messaging'},
        {vcard: 'NUMBER', human:'Number'},
        {vcard: 'TITLE', human: 'Title'},
        {vcard: 'URL', human: 'Url'},
        {vcard: 'X-ALT-EMAIL', human: 'Alternative-Email'},
        {vcard: 'X-ALT-JABBERID', human: 'Alternative-JabberID'},
        {vcard: 'X-ASSISTANT', human: 'Assistant'},
        {vcard: 'X-ASSISTANT-PHONE', human: 'Assistant-Phone'},
        {vcard: 'X-DID', human: 'DID'},
        {vcard: 'X-FACEBOOK', human: 'Facebook-URL'},
        {vcard: 'X-INTERN', human: 'Internal-Number'},
        {vcard: 'X-LINKEDIN', human: 'LinkedIn-URL'},
        {vcard: 'X-LOCATION', human: 'Location'},
        {vcard: 'X-MANAGER', human: 'Manager'},
        {vcard: 'X-SALUTATION', human: 'Salutation'},
        {vcard: 'X-TWITTER', human: 'Twitter-URL'},
        {vcard: 'X-XING', human: 'Xing-URL'}
      ];

      _.find(dict, function (obj) {
        if ((translated === obj.vcard) || (translated === obj.human)) {
          translated = (translated === obj.vcard) ? obj.human : obj.vcard;
          return
        }
      })

      return translated;
    }

  return profile;


    // function Profile(jid) {
    //   var $             = angular.element;
    //   var self          = this;
    //   this.jid          = jid;
    //   this.fn           = '';
    //   this.nGiven       = '';
    //   this.nMiddle      = '';
    //   this.nFamily      = '';
    //   this.photoType    = '';
    //   this.photoBinval  = '';
    //   this.photo = '';

    //   /**
    //    * returns the full name of the profile
    //    * @return {String}       the full name
    //    */
    //   this.fullName = function () {
    //     if (this.fn) return this.fn;

    //     var arr = [];
    //     if (this.nGiven) arr.push(this.nGiven);
    //     if (this.nMiddle) arr.push(this.nMiddle);
    //     if (this.nFamily) arr.push(this.nFamily);

    //     if (arr.length > 0) return arr.join(' ');

    //     return strophe.getNodeFromJid(this.jid);
    //   };

    //   /**
    //    * returns the base64-encoded photo
    //    * @return {String}       base64 photo
    //    */
    //   this.photoSrc = function () {
    //     if (!this.photoType || !this.photoBinval) return 'styles/images/white_no_pic_provided.png';
    //     return 'data:' + this.photoType + ';base64,' + this.photoBinval;
    //   };

    //   /**
    //    * sets the internal vCard Object
    //    * @param {NamedNodeMap} vCard      received NamedNodeMap
    //    */
    //   this.set = function (vCard) {
    //     var internalProp  = '';
    //     var childName     = '';
    //     var parentName    = '';
    //     var trimmed       = '';
    //     var vchildren     = $(vCard).children().children();
    //     var tchildren

    //     // cycles every vCard children, then searching (if avail.) one level deep
    //     _.each(vchildren, function (tag) {
    //       parentName  = $(tag)[0].tagName.toString().toLowerCase();
    //       tchildren   = $(tag).children();

    //       if (tchildren.length > 0)
    //         _.each(tchildren, function (child) {
    //           childName   = $(child)[0].tagName.toString().toLowerCase();
    //           trimmed     = $(child).text().trim();

    //           if (parentName === 'photo') {

    //             if (childName === 'type')
    //               self.photo = 'data:' + trimmed + ';base64,' + self.photo;
    //             else if (childName === 'binval')
    //               self.photo = self.photo + trimmed;

    //           } else {
    //             childName           = childName[0].toUpperCase() + childName.slice(1);
    //             internalProp        = parentName + childName;
    //             self[internalProp]  = trimmed;
    //           }
    //         })
    //       else {
    //         internalProp = parentName.replace(new RegExp('-','gm'),'');
    //         self[internalProp] = $(tag).text().trim();
    //       };
    //     });
    //   };
    // }

    // return Profile;
  }
]);
})();
