angular.module("ironBookApp.controllers")

  .controller("newsCtrl", function($scope, $location, dataSvcs) {

    $scope.updates = dataSvcs.getUpdates();

    $scope.createUpdate = function(newUpdate){
      dataSvcs.addUpdate(newUpdate);
      $scope.newUpdate = {};
    };

  });
