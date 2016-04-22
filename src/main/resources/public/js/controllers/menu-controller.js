angular.module('PetShop').controller('MenuController', ['$scope', '$location', '$window', 'Cart', 'Login', function ($scope, $location, $window, Cart, Login) {

    $window.onclick = function () {
        if ($scope.showLogin === true) {
            $scope.showLogin = false;
            $scope.$apply();
        }
    };

    $scope.showLogin = false;

    $scope.username = '';
    $scope.password = '';

    $scope.getClass = function (path) {
        return ($location.path() === path) ? 'active' : '';
    };
    $scope.countItems = function () {
        return Cart.countItems();
    };
    $scope.getUser = function () {
        return Login.getUser();
    };
    $scope.toggleLogin = function () {
        $scope.showLogin = !$scope.showLogin;
    };
    $scope.isLoggedIn = function () {
        return Login.isLoggedIn();
    };
    $scope.isAdmin = function () {
        return Login.isAdmin();
    };
    $scope.login = function () {
        Login.login($scope.username, $scope.password).then(function () {
            $scope.showLogin = false;
            $location.path("/");
        });
    };
    $scope.logout = function () {
        Login.logout();
    };
}]);