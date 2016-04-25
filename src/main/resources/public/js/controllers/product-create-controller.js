angular.module('PetShop').controller('ProductCreateController', ['$scope', '$http', '$location', 'Login', 'Message', function ($scope, $http, $location, Login, Message) {

    if (!Login.isAdmin()) {
        $location.path("/");
    }

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