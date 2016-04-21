angular.module('PetShop').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/products.html',
        controller: 'ProductController',
        controllerAs: 'shop'
    }).when('/cart', {
        templateUrl: '/templates/pages/cart.html',
        controller: 'CartController',
        controllerAs: 'cart'
    }).when('/place-order', {
        templateUrl: '/templates/pages/place-order.html',
        controller: 'PlaceController',
        controllerAs: 'place'
    }).when('/login', {
        templateUrl: '/templates/pages/login.html',
        controller: 'LoginController',
        controllerAs: 'place'
    }).otherwise({redirectTo: '/'});
});