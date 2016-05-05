app.controller('settingsCtrl', ['$scope', 'Settings', '$mdToast', '$mdDialog', '$rootScope', 'THEMES', function ($scope, Settings, $mdToast, $mdDialog, $rootScope, THEMES) {

    $scope.themes = THEMES;

    $scope.settings = Settings.query();
    $scope.newSetting = new Settings();

    $scope.reset = function () {
        $scope.newSetting = new Settings();
    };

    $scope.save = function () {
        var i = -1;
        var j = 0;

        $scope.settings.forEach(function (setting) {
            if (setting.id === $scope.newSetting.id) {
                i = j;
            }
            j = j++;
        });

        $scope.newSetting.$save().then(function (success) {

            if(success.active){
                $rootScope.settings = success;
            };

            if (i >= 0) {
                $scope.settings[i] = success;
            } else {
                $scope.settings.push(success);
            }

            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.reset();
        }, function (err) {
            if (err.status === 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Unauthorized')
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

    $scope.delete = function ($event, setting) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this setting?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            setting.$delete().then(function (success) {
                var i = $scope.settings.indexOf(setting);
                $scope.settings.splice(i, 1);
                $scope.reset();

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
        });
    };

    $scope.open = function (setting) {
        $scope.newSetting = setting;
    };
}]);
