angular.module('PetShop').controller('CartController', ['$scope', '$location', 'Products', 'Cart', function ($scope, $location, Products, Cart) {

    $scope.items = [];
    $scope.total = 0;

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
                    product['amount'] = cart[item];
                    //Calculate total price
                    total += product.amount * product.price;
                    items.push(product);
                }
            }
            $scope.items = items;
            $scope.total = total;
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

    $scope.placeOrder = function () {
        Cart.placeOrder().success(function (data) {
            Cart.clearItems();
            $location.path('/');
        }).error(function (data) {
            console.log(data);
        });
    };
}]);