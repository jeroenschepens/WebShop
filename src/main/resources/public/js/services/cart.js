angular.module('PetShop').factory('Cart', ['$localStorage', function ($localStorage) {

    if (typeof $localStorage.cart !== 'object' || $localStorage.cart == null) {
        $localStorage.cart = {};
    }

    var factory = {};

    factory.addItem = function (item) {
        var amount = $localStorage.cart[item];
        if (isNaN(amount)) {
            $localStorage.cart[item] = 1;
        } else {
            $localStorage.cart[item] = amount + 1;
        }
    };

    factory.countItems = function () {
        var count = 0;
        Object.keys($localStorage.cart).forEach(function (key) {
            count = count + $localStorage.cart[key];
        });
        return count;
    };
    
    factory.getItems = function() {
        return $localStorage.cart;
    };
    
    factory.clearItems = function() {
        $localStorage.cart = {};
    };

    return factory;
}]);