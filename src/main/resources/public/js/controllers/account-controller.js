angular.module('PetShop').controller('AccountController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.user = {};

    $http.get("/api/users/current").then(function (data) {
        $scope.user = data.data;
    });

    $scope.update = function () {
        $http.put("api/users", $scope.user);
        $location.path("/");
    }
}]);