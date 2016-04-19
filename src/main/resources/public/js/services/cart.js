angular.module('PetShop').factory('Cart', ['$localStorage', '$http', function ($localStorage, $http) {

    if (typeof $localStorage.cart !== 'object' || $localStorage.cart == null) {
        $localStorage.cart = {};
    }

    return {

        addItem: function (item) {
            var amount = $localStorage.cart[item];
            if (isNaN(amount)) {
                $localStorage.cart[item] = 1;
            } else {
                $localStorage.cart[item] = amount + 1;
            }
        },

        removeItem: function (item) {
            var amount = $localStorage.cart[item];
            if (!isNaN(amount)) {
                if (amount > 1) {
                    $localStorage.cart[item] = amount - 1;
                } else {
                    delete $localStorage.cart[item];
                }
            }
        },

        countItems: function () {
            var count = 0;
            Object.keys($localStorage.cart).forEach(function (key) {
                count = count + $localStorage.cart[key];
            });
            return count;
        },

        getItems: function () {
            return $localStorage.cart;
        },

        clearItems: function () {
            $localStorage.cart = {};
        },

        placeOrder: function () {
            console.log($localStorage.cart);
            return $http.post('/orders',$localStorage.cart);
        }
    }
}]);