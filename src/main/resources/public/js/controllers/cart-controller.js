angular.module('PetShop').controller('CartController', ['$scope', 'Products', 'Cart', function ($scope, Products, Cart) {

    $scope.items = [];
    $scope.total = 0;

    /**
     * Synchronizes memory with local storage
     */
    function refresh() {
        $scope.items = [];
        $scope.total = 0;
        Products.getProducts().then(function (products) {
            var cart = Cart.getItems();
            for (var item in cart) {
                if (cart.hasOwnProperty(item)) {
                    var product = products[item];
                    product['amount'] = cart[item];
                    //Calculate total price
                    $scope.total += product.amount * product.price;
                    $scope.items.push(product);
                }
            }
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
}]);