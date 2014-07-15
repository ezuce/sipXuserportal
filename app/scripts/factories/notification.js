(function () {

  'use strict';

  uw.factory('notification', [
    'notify',
    '$timeout',
    function (notify, $timeout) {
      return function (obj) {

        try {
          if (document.hasFocus()) {
            return true
          }

          var myNotification = new notify(obj.title, {
              body: obj.body,
              notifyShow: onDisplay,
              notifyClick: onClk
          });

          // if ((myNotification.isSupported()) && (myNotification.needsPermission())) {
          //   myNotification.requestPermission();
          // }

          if (!document.hasFocus()) {
            myNotification.show();
          }

        } catch(err) {
          console.log(err);
        }

        function onDisplay(event) {
          $timeout(function() {
            if (event.currentTarget.cancel) {
              event.currentTarget.cancel()
            } else {
              event.currentTarget.close()
            };
          }, 3000);
        }

        function onClk(event) {
          if (event.currentTarget.cancel) {
            event.currentTarget.cancel()
          } else {
            event.currentTarget.close()
          };
          window.focus();
        }

        return true
      }
    }
  ]);

})();
