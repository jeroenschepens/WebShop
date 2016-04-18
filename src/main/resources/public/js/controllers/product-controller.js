angular.module('PetShop').controller('ProductController', ['$http', '$log', function ($http, $log) {
    var shop = this;
    this.products = [];
    this.categories = [];

    shop.categoryFilter = {
        category: {
            name: '',
            id: ''
        }
    };

    $http.get('/products').success(function (data) {
        shop.products = data;
    });
    $http.get('/categories').success(function (data) {
        shop.categories = data;
    });

    shop.activateCategory = function (category) {
        shop.categoryFilter.category.name = category.name;
        shop.categoryFilter.category.id = category.id;
    };

    shop.deactivateCategory = function () {
        shop.categoryFilter.category.name = '';
        shop.categoryFilter.category.id = '';
    };
}]);