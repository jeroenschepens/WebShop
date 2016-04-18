angular.module('PetShop').controller('MenuController', ['$scope', '$location', 'Cart', function ($scope, $location, Cart) {
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };
    $scope.countItems = function () {
        return Cart.countItems();
    };
}]);