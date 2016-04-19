angular.module('PetShop').controller('PlaceController', ['$scope', '$location', 'Cart', function ($scope, $location, Cart) {

    $scope.ready = false;
    $scope.id = null;
    
    $scope.customer = {};

    $scope.placeOrder = function () {
        Cart.placeOrder($scope.customer).success(function (data) {
            Cart.clearItems();
            $scope.ready = true;
            $scope.id = data.id;
        }).error(function (data) {
        });
    };
}]);