angular.module('PetShop').factory('Message', ['$location', function ($location) {

    var message = null;
    var style = null;
    var status = false;
    var path = null;

    return {
        setMessage: function (newMessage, msgStyle, samePage) {
            style = msgStyle ? msgStyle : "info";
            message = newMessage;
            path = $location.path();
            status = samePage;
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
            return message;
        },
        getStyle: function () {
            return style;
        },
        dismiss: function () {
            message = null;
            status = false;
            path = null;
        }
    };
}]);