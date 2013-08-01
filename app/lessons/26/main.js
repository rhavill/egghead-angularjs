var app = angular.module("app", []);

// When the 2nd parameter passed to app.controller is a function, the parameters passed to that function must match an existing provider (dependency injection).
//app.controller("MyCtrl", function ($scope, $http, $parse) {

//});

// Another way to set up dependency injection in a controller is to pass an array as the 2nd paramter to app.controller. This protects against JS minification.
app.controller("MyCtrl", ['$scope','$http', function ($scope,$http) {
  console.log($scope);
}]);

app.directive("myDirective", function ($http,$parse) {
  return {
  	//scope: {}, Isolating the scope gives this function access to a different scope from MyCtrl
    link: function(scope, element, attrs) {
      // The parameter names in the function do not matter. The order of the parameters determines what gets passed to the function.
      console.log(scope);
    }
  };
});
