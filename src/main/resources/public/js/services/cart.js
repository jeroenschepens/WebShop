angular.module('PetShop').factory('Cart', ['$localStorage', function ($localStorage) {

    var cartService = this;

    if (typeof $localStorage.cart !== 'object' || $localStorage.cart == null) {
        $localStorage.cart = {};
    }

    cartService.cart = $localStorage.cart;

    var factory = {};

    factory.addItem = function (item) {
        var amount = cartService.cart[item];
        if (isNaN(amount)) {
            cartService.cart[item] = 1;
        } else {
            cartService.cart[item] = amount + 1;
        }
    };

    factory.countItems = function () {
        var count = 0;
        Object.keys(cartService.cart).forEach(function (key) {
            count = count + cartService.cart[key];
        });
        return count;
    };

    return factory;
}]);