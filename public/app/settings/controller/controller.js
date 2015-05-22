app.controller('settingsCtrl', ['$scope', 'Settings', '$mdToast', '$mdDialog', '$rootScope', function ($scope, Settings, $mdToast, $mdDialog, $rootScope) {
    
    $scope.themes = [
        {id: 'red_lime', name: 'Primary: Red, Accent: Lime'},
        {id: 'red_yellow', name: 'Primary: Red, Accent: Yellow'},
        {id: 'red_amber', name: 'Primary: Red, Accent: Amber'},
        {id: 'red_orange', name: 'Primary: Red, Accent: Orange'},
        {id: 'red_deep-orange', name: 'Primary: Red, Accent: Deep Orange'},
        {id: 'red_brown', name: 'Primary: Red, Accent: Brown'},
        {id: 'red_grey', name: 'Primary: Red, Accent: Grey'},
        {id: 'red_pink', name: 'Primary: Red, Accent: Pink'},
        {id: 'red_purple', name: 'Primary: Red, Accent: Purple'},
        {id: 'red_deep-purple', name: 'Primary: Red, Accent: Deep Purple'},
        {id: 'red_indigo', name: 'Primary: Red, Accent: Indigo'},
        {id: 'red_blue', name: 'Primary: Red, Accent: Blue'},
        {id: 'red_light-blue', name: 'Primary: Red, Accent: Light Blue'},
        {id: 'red_cyan', name: 'Primary: Red, Accent: Cyan'},
        {id: 'red_teal', name: 'Primary: Red, Accent: Teal'},
        {id: 'red_green', name: 'Primary: Red, Accent: Green'},
        {id: 'red_light-green', name: 'Primary: Red, Accent: Light Green'},
        {id: 'red_blue-grey', name: 'Primary: Red, Accent: Blue Grey'}
    ];  
        
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