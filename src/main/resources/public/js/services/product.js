angular.module('PetShop').factory('Products', ['$q', '$http', function ($q, $http) {

    var products;

    return {
        getProducts: function () {
            var defer = $q.defer();
            $http.get('/products').success(function (data) {
                var items = {};
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    items[item.id] = item;
                }
                products = items;
                defer.resolve(products);
            });
            return defer.promise;
        }
    };
}]);