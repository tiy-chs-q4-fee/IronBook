angular.module("ironBookApp.controllers")

  .controller("enrollCtrl", function($scope, $location, dataSvcs) {

    $scope.studentData = dataSvcs.studentData;

    $scope.newStudent = function(data) {

      $scope.studentData.push({

        name: data.name,
        type: data.category,
        img: "http://placehold.it/100x100",
        ghUser: data.gitHubName,
        ghPage: data.gitHubUrl,
        tHandle: data.twitterName,
        tPage: data.twitterUrl,
        blog: data.blogUrl,
        ironyardLocation: data.location,
        about: data.about,
        loc: {
          long: null,
          lat: null
        }
      });

      $scope.student = {};

    };

    $scope.toHome = function () {
    $location.path("/");
  };
  $scope.CollapseDemoCtrl = function(){
    $scope.isCollapsed = true;
  }
  });
