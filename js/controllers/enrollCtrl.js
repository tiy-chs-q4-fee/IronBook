angular.module("ironBookApp.controllers")

  .controller("enrollCtrl", function($scope, $location, dataSvcs) {

    $scope.studentData = dataSvcs.studentData;

  });
