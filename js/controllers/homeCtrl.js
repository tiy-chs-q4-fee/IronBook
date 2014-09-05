angular.module("ironBookApp.controllers")

  .controller("homeCtrl", function($scope, $location, dataSvcs) {

    $scope.studentData = dataSvcs.studentData;

    $scope.updates = dataSvcs.getUpdates();
    var length = $scope.studentData.length;
    var n = 0;

    $scope.findStudent = function (x) {
      console.log('something');
      var y = $scope.studentData;
      console.log(y);
      for (var i = 0; i < length; i++) {
        if (x === y[i].name) {
          console.log(i);
          return i;
        }
      };
    };


    // $scope.newStudent = function(data) {
    //
    //   $scope.studentData.push({
    //
    //     name: data.name,
    //     img: "blank",
    //     ghUser: data.gitHubName,
    //     ghPage: data.gitHubUrl,
    //     tHandle: data.twitterName,
    //     tPage: data.twitterUrl,
    //     blog: data.blogUrl,
    //     ironyardLocation: data.location,
    //     about: data.about,
    //     loc: {
    //       long: null,
    //       lat: null
    //     }
    //   });
    // };

  });
