App.factory('fileUpload', ['$http', function ($http) {

        var server='http://52.24.80.193:8080/encryption/';
        //var server='http://localhost:8080/EncryptDecryptFile/';

        return {
            uploadFileEncrypt: function (file, key) {
                console.log("encrypt key:"+key)
                var fd = new FormData();
                fd.append('file', file);
                return $http.post(server + 'encrypt/'+ key, fd, {
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
            uploadFileDecrypt: function (file, key) {
                console.log("descrypt key:"+ key);
                var fd = new FormData();
                fd.append('file', file);
                return $http.post(server + 'decrypt/' + key, fd, {
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
