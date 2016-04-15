angular.module('PetShop').controller('ProductController', ['$http', '$routeParams', function ($http, $routeParams) {
    var shop = this;
    this.products = [];
    this.category = '';
    $http.get('/products/' + $routeParams.id).success(function (data) {
        shop.products = data;
        if (data.length > 0) {
            shop.category = data[0].category.name;
        }
    });
}]);