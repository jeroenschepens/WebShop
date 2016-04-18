angular.module('PetShop').controller('CartController', ['Cart', function (Cart) {
    this.countItems = function () {
        return Cart.countItems();
    };

    this.getItems = function () {
        console.log(Cart.getItems());
        return Cart.getItems();
    };
    
    this.clearItems = function() {
        Cart.clearItems();
    };
}]);