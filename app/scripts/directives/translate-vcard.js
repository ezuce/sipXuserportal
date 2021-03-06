(function() {

  'use strict';

  uw.filter('translate', function () {
    return function (input) {
      var translated = input;
      var dict = [
        {vcard: 'ADR', human: 'Address'},
        {vcard: 'CTRY', human: 'Country'},
        {vcard: 'EXTADD', human: 'Ext-Address'},
        {vcard: 'HOME', human: 'Home'},
        {vcard: 'LOCALITY', human: 'Locality'},
        {vcard: 'PCODE', human: 'Postal-Code'},
        {vcard: 'REGION', human: 'Region'},
        {vcard: 'STREET', human: 'Street'},
        {vcard: 'BDAY', human: 'Birthday'},
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
        {vcard: 'ORGNAME', human: 'Org-Name'},
        {vcard: 'ORGUNIT', human: 'Org-Unit'},
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
        {vcard: 'X-ALT-EMAIL', human: 'Alt-Email'},
        {vcard: 'X-ALT-JABBERID', human: 'Alt-JabberID'},
        {vcard: 'X-ASSISTANT', human: 'Assistant'},
        {vcard: 'X-ASSISTANT-PHONE', human: 'Assistant-Phone'},
        {vcard: 'X-DID', human: 'DID'},
        {vcard: 'X-FACEBOOK', human: 'Facebook-URL'},
        {vcard: 'X-INTERN', human: 'Int-Number'},
        {vcard: 'X-LINKEDIN', human: 'LinkedIn-URL'},
        {vcard: 'X-LOCATION', human: 'Location'},
        {vcard: 'X-MANAGER', human: 'Manager'},
        {vcard: 'X-SALUTATION', human: 'Salutation'},
        {vcard: 'X-TWITTER', human: 'Twitter-URL'},
        {vcard: 'X-XING', human: 'Xing-URL'},

        {vcard: 'assistantPhoneNumber', human: 'Assistant Phone No.'},
        {vcard: 'faxNumber', human: 'Fax Number'},
        {vcard: 'avatar', human: 'Avatar'},
        {vcard: 'emailAddress', human: 'Email Address'},
        {vcard: 'homeAddress', human: 'Home Address'},
        {vcard: 'imDisplayName', human: 'IM Display Name'},
        {vcard: 'imId', human: 'IM ID'},
        {vcard: 'officeAddress', human: 'Office Address'},
        {vcard: 'city', human: 'City'},
        {vcard: 'country', human: 'Country'},
        {vcard: 'officeDesignation', human: 'Mail stop'},
        {vcard: 'state', human: 'State'},
        {vcard: 'street', human: 'Street'},
        {vcard: 'zip', human: 'ZIP'},
        {vcard: 'alternateEmailAddress', human: 'Alt. Email Addr.'},
        {vcard: 'alternateImId', human: 'Alt. IM ID'},
        {vcard: 'jobDept', human: 'Dept.'},
        {vcard: 'jobTitle', human: 'Title'},
        {vcard: 'location', human: 'Location'},
        {vcard: 'homePhoneNumber', human: 'Home Phone'},
        {vcard: 'cellPhoneNumber', human: 'Cell Phone'},
        {vcard: 'companyName', human: 'Company'},

        {vcard: 'assistantName', human: 'Assistant Name'},
        {vcard: 'lastName', human: 'Last Name'},
        {vcard: 'useBranchAddress', human: 'Use Branch Address'},
        {vcard: 'contact-information', human: 'Contact Information'},
        {vcard: 'branchName', human: 'Branch Name'},
        {vcard: 'enabled', human: 'Enabled'},
        {vcard: 'firstName', human: 'First Name'},
        {vcard: 'ldapManaged', human: 'LDAP Managed'},
        {vcard: 'salutation', human: 'Salutation'},
        {vcard: 'timestamp', human: 'Timestamp'},
        {vcard: 'didNumber', human: 'DID'},
        {vcard: 'facebookName', human: 'FB Name'},
        {vcard: 'linkedinName', human: 'LinkedIn Name'},
        {vcard: 'twiterName', human: 'Twitter Name'},
        {vcard: 'xingName', human: 'XING Name'},
        {vcard: 'branchAddress', human: 'Branch Address'},
        {vcard: 'manager', human: 'Manager'},

        {vcard: 'confEnter', human: 'Conference enter'},
        {vcard: 'confExit', human: 'Conference exit'},
        {vcard: 'vmBegin', human: 'Voicemail begin'},
        {vcard: 'vmEnd', human: 'Voicemail end'}
      ];

      _.find(dict, function (obj) {
        if ((translated === obj.vcard) || (translated === obj.human)) {
          translated = (translated === obj.vcard) ? obj.human : obj.vcard;
          return true
        }
      })

      return translated;
    }
  })

})();
