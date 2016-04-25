angular.module('PetShop').controller('ProductController', ['$http', 'Cart', 'Login', function ($http, Cart, Login) {
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

    shop.addItem = function (item) {
        Cart.addItem(item);
    };

    shop.getClass = function (cat) {
        if (shop.categoryFilter.category.id === cat) {
            return "btn-primary"
        } else {
            return "btn-default"
        }
    };

    shop.isAdmin = function () {
        return Login.isAdmin();
    };
}]);