App.controller('EncryptController', ['$scope', 'fileUpload', function ($scope, fileUpload) {

        
        $scope.uploadFile = function () {
            if($scope.encrypt_key)
            {
               $scope.uploader = {};
               $scope.handling = true;  
              fileUpload.uploadFileEncrypt($scope.myFile,$scope.encrypt_key).then(
                    function (d) {
                        $scope.uploader = d.data;
                        $scope.handling = false;
                    },
                    function (d) {
                        console.log(d);
                        $scope.handling = false;
                    });
           }
           else
             alert('Please input encrypt KEY');
        };

    }]);
App.controller('DecryptController', ['$scope', 'fileUpload', function ($scope, fileUpload) {

        $scope.uploadFile = function () {
            if($scope.decrypt_key)
            {
                $scope.uploader = {};
                $scope.handling = true;
                fileUpload.uploadFileDecrypt($scope.myFile, $scope.decrypt_key).then(
                    function (d) {
                        $scope.uploader = d.data;
                        $scope.handling = false;
                    },
                    function (d) {
                        console.log(d);
                        $scope.handling = false;
                    });
           }
           else
            alert('Please input decrypt KEY');
        };

    }]);

