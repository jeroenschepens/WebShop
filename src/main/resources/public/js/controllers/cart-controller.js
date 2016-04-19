angular.module('PetShop').controller('CartController', ['$scope', '$location', 'Products', 'Cart', function ($scope, $location, Products, Cart) {

    $scope.items = [];
    $scope.total = 0;
    $scope.ready = false;

    /**
     * Synchronizes memory with local storage
     */
    function refresh() {
        var items = [];
        var total = 0;
        Products.getProducts().then(function (products) {
            var cart = Cart.getItems();
            for (var item in cart) {
                if (cart.hasOwnProperty(item)) {
                    var product = products[item];
                    if (product !== undefined) {
                        product['amount'] = cart[item];
                        //Calculate total price
                        total += product.amount * product.price;
                        items.push(product);
                    } else {
                        Cart.clearItem(item);
                    }
                }
            }
            $scope.items = items;
            $scope.total = total;
            $scope.ready = true;
        });
    }

    refresh();

    this.countItems = function () {
        return Cart.countItems();
    };

    this.getItems = function () {
        return Cart.getItems();
    };

    this.clearItems = function () {
        Cart.clearItems();
        refresh();
    };

    $scope.addItem = function (item) {
        Cart.addItem(item);
        refresh();
    };

    $scope.removeItem = function (item) {
        Cart.removeItem(item);
        refresh();
    };
}]);