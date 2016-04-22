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
    }).when('/register', {
        templateUrl: '/templates/pages/register.html',
        controller: 'RegisterController'
    }).when('/account', {
        templateUrl: '/templates/pages/account.html'
    }).otherwise({redirectTo: '/'});
});