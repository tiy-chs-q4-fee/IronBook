angular.module("ironBookApp.controllers")

  .controller("homeCtrl", function($scope, $location, dataSvcs) {

    $scope.studentData = dataSvcs.studentData;

  });
