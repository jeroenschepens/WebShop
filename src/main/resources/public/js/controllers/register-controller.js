angular.module('PetShop').controller('RegisterController', ['$scope', '$http', '$location', 'Message', function ($scope, $http, $location, Message) {

    $scope.user = {
        customerData: {}
    };

    $scope.register = function () {
        $http.post("/api/users/register", $scope.user).then(function (data) {
            Message.setMessage("U heeft zich succesvol geregistreerd!", "success", false);
            $location.path("/");
        }, function (data) {
            if (data.data.message == "EMAIL_USED") {
                Message.setMessage("Dit emailadres is al in gebruik!", "danger", true);
            }
        });
    };
}]);