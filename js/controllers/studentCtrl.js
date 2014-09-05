angular.module("ironBookApp.controllers")

  .controller("studentCtrl", function($scope, $location, dataSvcs, $routeParams) {

    $scope.studentData = dataSvcs.studentData;
    $scope.indexNumber = $routeParams.indexOfStudent;

  });
