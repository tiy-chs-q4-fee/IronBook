angular.module("ironBookApp.controllers")

  .controller("studentCtrl", function($scope, $location, dataSvcs, $routeParams) {

    $scope.studentData = dataSvcs.studentData;
    $scope.indexNumber = $routeParams.indexOfStudent;

    $scope.CarouselDemoCtrl = function() {
      $scope.myInterval = 4000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
      };
    }

  });
