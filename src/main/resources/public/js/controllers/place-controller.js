angular.module('PetShop').controller('PlaceController', ['$scope', '$location', 'Cart', function ($scope, $location, Cart) {

    $scope.customer = {};

    $scope.placeOrder = function () {
        Cart.placeOrder($scope.customer).success(function (data) {
            console.log($scope.customer);
            Cart.clearItems();
            $location.path('/');
        }).error(function (data) {
            console.log(data);
        });
    };
}]);