(function(){
'use strict';

uw.controller('bottombar', [
  '$rootScope',
  '$interval',
  '$scope',
  '$timeout',
  'restService',
  'uiService',
  function ($rootScope, $interval, $scope, $timeout, restService, uiService) {
    var interval;

    $scope.ui             = uiService.ui.root;
    $scope.selectedItem   = uiService.ui.root.template;
    $scope.search         = uiService.search;
    $scope.callNo         = '';
    $scope.showMainMenu   = false;
    $scope.showDial       = false;
    $scope.startNo        = false;
    $scope.phone          = {
      call: null,
      active: null,
      msg: null,
      disabled: null
    }
    $scope.keyboard       = [
      {no: '1', text: ''},
      {no: '2', text: 'abc'},
      {no: '3', text: 'def'},
      {no: '4', text: 'ghi'},
      {no: '5', text: 'jkl'},
      {no: '6', text: 'mno'},
      {no: '7', text: 'pqrs'},
      {no: '8', text: 'tuv'},
      {no: '9', text: 'wxyz'},
      {no: '*', text: ''},
      {no: '0', text: ''},
      {no: '#', text: ''}
    ]
    $scope.tooltip = {
      mainMenu: {
        "title": "Menu",
        "checked": false
      },
      dialpad: {
        "title": "Dialpad",
        "checked": false
      }
    }

    $scope.$watchCollection('search', function (val) {
      if (val.t === '') {
        uiService.util.changeView(uiService.ui.root.oldTemplate);
      } else if (uiService.ui.root.template !== uiService.ui.root.templates[7]) {
        uiService.util.changeView(uiService.ui.root.templates[7]);
      };

      return
    })

    $scope.$watch('callNo', function (val) {
      if (val === '') {
        $scope.startNo = false;
      } else {
        $scope.startNo = true;
      }

      return
    })

    $scope.broadcastViewChange = function (item) {
      $scope.search.t           = '';
      $scope.showMainMenu       = false;
      $scope.selectedItem       = item;
      $scope.phone.msg          = null;

      uiService.util.changeView(item);

      return
    }

    $scope.showMainMenuFn = function () {
      $scope.showMainMenu   = !$scope.showMainMenu;
      $scope.showDial       = false;
      $scope.callNo         = '';
      $scope.phone.msg      = null;

      return
    }

    $scope.showDialFn = function (force) {
      if (force) {
        $scope.showDial = true;
      } else {
        $scope.showDial = !$scope.showDial;
      }
      $scope.showMainMenu   = false;
      $scope.phone.msg      = null;

      if ($scope.showDial === false) {
        $interval.cancel(interval);
        $scope.phone.disabled = null;
      }

      return
    }

    $scope.clearNo = function () {
      $scope.callNo = '';

      return
    }

    $scope.addNo = function (no) {
      $scope.callNo = $scope.callNo + no;

      return;
    }

    $scope.phone.call = function () {
      var callNo              = angular.copy($scope.callNo);
      $scope.phone.msg        = 'Requesting call...';
      $scope.phone.disabled   = true;

      if (callNo !== '') {
        restService.postBasicCall(callNo)
          .then(function () {
            $scope.phone.disabled   = true;
            $scope.phone.msg        = 'Requesting call info...';
            startInterval(callNo);
          })
          .catch(function (status) {
            $scope.phone.msg = 'Error ' + status;
          });
      }

      function startInterval(no) {
        interval = $interval(function () {
          restService.getBasicCall(no).then(function (data) {
            $scope.phone.msg = data[data.length-1].status
          }).catch(function (status) {
            $scope.phone.msg = 'Error ' + status;
          })
        }, 1000);
      }

      return
    }

    $rootScope.$on('controller.mainview.callDialpad', function (e, obj) {
      $scope.showDialFn(true);
      $scope.callNo = obj.number;
    })

  }
]);
})();
