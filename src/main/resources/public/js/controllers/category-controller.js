angular.module('PetShop').controller('CategoryController', ['$http', function ($http) {
    var shop = this;
    this.categories = [];
    $http.get('/categories').success(function (data) {
        shop.categories = data;
    });
}]);