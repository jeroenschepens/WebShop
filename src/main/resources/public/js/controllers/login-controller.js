angular.module('PetShop').controller('LoginController', ['$scope', '$location', 'Login', function ($scope, $location, Login) {

    $scope.username = '';
    $scope.password = '';

    $scope.login = function () {
        Login.login($scope.username, $scope.password).success(function (data) {
            $location.path("/");
        }).error(function (data) {
            alert("Login niet gelukt")
        });
    }
}]);