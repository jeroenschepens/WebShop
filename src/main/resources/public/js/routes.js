angular.module('PetShop').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/products.html',
        controller: 'ProductController',
        controllerAs: 'shop'
    }).when('/cart', {
        templateUrl: '/templates/pages/cart.html',
        controller: 'CartController',
        controllerAs: 'cart'
    }).otherwise({redirectTo: '/'});
});