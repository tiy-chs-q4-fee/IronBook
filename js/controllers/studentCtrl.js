angular.module("ironBookApp.controllers")

  .controller("studentCtrl", function($scope, $location, dataSvcs) {

    $scope.studentData = dataSvcs.studentData;

  });
