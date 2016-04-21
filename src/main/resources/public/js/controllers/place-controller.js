angular.module('PetShop').controller('PlaceController', ['$scope', '$location', 'Cart', 'Message', function ($scope, $location, Cart, Message) {

    $scope.pcRegex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    $scope.hnRegex = /^[1-9][0-9]{0,4} ?[a-z]{0,6}$/i;

    $scope.ready = false;
    $scope.id = null;

    $scope.customer = {};

    $scope.placeOrder = function () {
        Cart.placeOrder($scope.customer).success(function (data) {
            Cart.clearItems();
            $scope.ready = true;
            Message.setMessage("Bestelling geplaatst met nummer #" + data.id);
            $location.path("/");
        })
    };
}]);