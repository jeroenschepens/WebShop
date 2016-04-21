angular.module('PetShop').factory('Login', ['$http', function ($http) {

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    var login = this;

    login.user = {};
    login.loggedIn = false;

    $http.get('/login').then(function (data) {
        login.user = data.data;
    });

    return {
        login: function (username, password) {

            var input = username + ':' + password;

            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);


            return $http.get('/login', {
                headers: {'Authorization': 'Basic ' + output}
            }).then(function (data) {
                login.loggedIn = true;
                login.user = data.data;
            });
        },

        logout: function () {
            return $http.get('/logout').then(function () {
                login.loggedIn = false;
                login.user = {};
            });
        },

        getUser: function () {
            return login.user;
        },

        isLoggedIn: function () {
            return login.loggedIn;
        }
    }
}]);