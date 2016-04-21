angular.module('PetShop').factory('Message', ['$location', function ($location) {

    var message = null;
    var status = false;
    var path = null;

    console.log("hello!");

    return {
        setMessage: function (newMessage) {
            message = newMessage;
            path = $location.path();
        },
        getMessage: function () {
            if (message != null) {
                if (status === false) {
                    if ($location.path() != path) {
                        path = $location.path();
                        status = true;
                    }
                } else if (status === true) {
                    if ($location.path() != path) {
                        this.dismiss();
                    }
                }
            }
            console.log(message);
            return message;
        },
        dismiss: function () {
            message = null;
            status = false;
            path = null;
        }
    };
}]);