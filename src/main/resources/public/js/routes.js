angular.module('PetShop').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/products.html',
        controller: 'ProductController',
        controllerAs: 'shop'
    }).otherwise({redirectTo: '/'});
});