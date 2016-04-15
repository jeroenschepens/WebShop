angular.module('PetShop').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/pages/categories.html',
        controller: 'CategoryController',
        controllerAs: 'shop'
    }).when('/categories/:id', {
        templateUrl: '/templates/pages/products.html',
        controller: 'ProductController',
        controllerAs: 'shop'
    }).otherwise({redirectTo: '/'});
});