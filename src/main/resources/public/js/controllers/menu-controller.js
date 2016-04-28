angular.module('PetShop').controller('MenuController', ['$scope', '$location', '$window', '$route', 'Cart', 'Login', function ($scope, $location, $window, $route, Cart, Login) {

    $window.onclick = function () {
        if ($scope.showLogin === true) {
            $scope.showLogin = false;
            $scope.$apply();
        }
    };

    $scope.showLogin = false;
    $scope.error = false;

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
        $scope.error = false;
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
            $scope.username = '';
            $scope.password = '';
            $route.reload();
        }, function () {
            $scope.error = true;
            $scope.username = '';
            $scope.password = '';
        });
    };
    $scope.logout = function () {
        Login.logout().then(function () {
            $route.reload();
        });
    };
}]);