app.controller('photosCtrl', ['$scope', 'Upload', 'Photos', '$window', 'SERVER_URL', '$mdDialog', '$mdToast',  function ($scope, Upload, Photos, $window, SERVER_URL, $mdDialog, $mdToast) {
    Photos.query(function (photos) {
        $scope.photos = photos;
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: '/photos?uniqueFilename=true',
                    file: file
                }).progress(function (evt) {
                    console.log(evt);
                    $scope.progress = evt.loaded * 100 / evt.total;
                }).success(function (success) {
                    delete $scope.progress;
                    $scope.photos.push(success[0]);
                });
            }
        }
        delete $scope.newPhotos;
    };

    $scope.delete = function ($event, photo) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this photo?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            Photos.remove({
                id: photo.id
            }, function () {
                var i = $scope.photos.indexOf(photo);
                $scope.photos.splice(i, 1);
            });
        }, function (err) {
                console.log(err);
                if (err.status === 401) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Unauthorized.')
                        .position('right bottom')
                    );
                } else {
                    console.log(err);
                    $mdToast.show(
                        $mdToast.simple()
                        .content('An error occured!')
                        .position('right bottom')
                    );
                }
            });
    };

    $scope.open = function (photo) {
        $window.open(SERVER_URL + '/upload/' + photo.filename, '_blank');
    };

}]);