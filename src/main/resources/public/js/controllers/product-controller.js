angular.module('PetShop').controller('ProductController', ['$http', function ($http) {
    var shop = this;
    this.products = [];
    $http.get('/products').success(function (data) {
        shop.products = data;
    });
}]);