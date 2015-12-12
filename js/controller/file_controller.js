App.controller('EncryptController', ['$scope', 'fileUpload', function ($scope, fileUpload) {

        $scope.uploadFile = function () {
            $scope.uploader = {};
            $scope.handling = true;
            fileUpload.uploadFileEncrypt($scope.myFile).then(
                    function (d) {
                        $scope.uploader = d.data;
                        $scope.handling = false;
                    },
                    function (d) {
                        console.log(d);
                        $scope.handling = false;
                    });
        };

    }]);
App.controller('DecryptController', ['$scope', 'fileUpload', function ($scope, fileUpload) {

        $scope.uploadFile = function () {
            $scope.uploader = {};
            $scope.handling = true;
            fileUpload.uploadFileDecrypt($scope.myFile).then(
                    function (d) {
                        $scope.uploader = d.data;
                        $scope.handling = false;
                    },
                    function (d) {
                        console.log(d);
                        $scope.handling = false;
                    });
        };

    }]);

