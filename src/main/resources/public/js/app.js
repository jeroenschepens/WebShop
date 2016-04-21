angular.module('PetShop', ['ngRoute', 'ngStorage'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }])
    .run(function ($rootScope, $location, Cart) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.templateUrl == "/templates/pages/place-order.html") {
                if (Cart.countItems() < 1) {
                    $location.path("/");
                }
            }
        })
    });