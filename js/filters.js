angular.module('ironBookApp.filters')
  .filter('dateFilter', function() {
    return function (objects) {
      var filtered_list = [];
      for (var i = 0; i < objects.length; i++) {
        var current = new Date().getTime(); //- 1*24*60*60*1000;
        var last_modified = new Date(objects[i].dt).getTime();
        if (current <= last_modified) {
          filtered_list.push(objects[i]);
        }
      }
      return filtered_list;
    }
  });
