angular.module("ironBookApp", ["ngRoute", "ironBookApp.controllers", "ironBookApp.services"])

  .config(function($routeProvider) {

    $routeProvider

      .when("/", {

        templateUrl:"views/home.html",
        controller:"homeCtrl"

      })

      .when("/student", {

        templateUrl:"views/student.html",
        controller:"studentCtrl"

      })
      
      .when("/student/:indexOfStudent", {

        templateUrl:"views/student.html",
        controller:"studentCtrl"

      })

      .when("/enroll", {

        templateUrl:"views/enroll.html",
        controller:"enrollCtrl"

      })

      .when("/notFound", {

        templateUrl:"views/home.html",
        controller:"homeCtrl"

      })

      .otherwise({

        redirectTo:"/notFound"

      })

  });

angular.module("ironBookApp.controllers", []);
angular.module("ironBookApp.services", []);

