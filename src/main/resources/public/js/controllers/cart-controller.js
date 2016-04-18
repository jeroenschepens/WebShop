angular.module('PetShop').controller('CartController', ['Cart', function (Cart) {
    this.countItems = function () {
        return Cart.countItems();
    };
}]);