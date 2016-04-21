angular.module('PetShop').controller('MessageController', ['$scope', 'Message', function ($scope, Message) {
    $scope.getMessage = function () {
        return Message.getMessage();
    };
    $scope.dismiss = function () {
        return Message.dismiss();
    };
}]);