angular.module('PetShop').controller('MessageController', ['$scope', 'Message', function ($scope, Message) {
    $scope.getMessage = function () {
        return Message.getMessage();
    };
    $scope.getStyle = function () {
        return "alert-" + Message.getStyle();
    };
    $scope.dismiss = function () {
        return Message.dismiss();
    };
}]);