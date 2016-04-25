angular.module('PetShop').controller('ProductCreateController', ['$scope', '$http', '$location', 'Message', function ($scope, $http, $location, Message) {

    $scope.product = {};

    $scope.categories = [];

    $http.get('/categories').then(function (data) {
        $scope.categories = data.data;
    });

    $scope.save = function () {
        $http.put("/products/", $scope.product).then(function () {
            Message.setMessage("Product bijgewerkt", "success", false);
            $location.path("/");
        });
    };
}]);