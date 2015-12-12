App.factory('fileUpload', ['$http', function ($http) {

        return {
            uploadFileEncrypt: function (file) {
                var fd = new FormData();
                fd.append('file', file);
                return $http.post("http://54.69.192.23/encryption/encrypt", fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                        function (d) {
                            return d;
                        },
                        function (d) {
                            return d;
                        }
                );
            },
            uploadFileDecrypt: function (file) {
                var fd = new FormData();
                fd.append('file', file);
                return $http.post("http://54.69.192.23/encryption/decrypt", fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(
                        function (d) {
                            return d;
                        },
                        function (d) {
                            return d;
                        }
                );
            }
        };

    }]);