angular.module('PetShop').controller('ProductDetailController', ['$scope', '$routeParams', '$http', '$location', 'Message', function ($scope, $routeParams, $http, $location, Message) {

    $scope.product = {};

    var productId = $routeParams.id;

    $http.get("/products/" + productId).then(function (data) {
        $scope.product = data.data;
    });

    $scope.save = function () {
        $http.put("/products/", $scope.product).then(function () {
            Message.setMessage("Product bijgewerkt", "success", false);
            $location.path("/");
        });
    };

    $scope.delete = function () {
        $http.delete("/products/" + productId).then(function () {
            Message.setMessage("Product verwijderd uit winkel", "success", false);
            $location.path("/");
        })
    };
}]);