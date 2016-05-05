//Palletes = ['red', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']

//Add to array themes registered
app.constant('THEMES', ['default', 'red-purple']);

app.config(['$stateProvider', '$mdThemingProvider', function ($stateProvider, $mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

    //    Register Theme
    //                    $mdThemingProvider.theme(themeName)
    //                        .primaryPalette(primary)
    //                        .accentPalette(accent)
    //                        .warnPalette(warn);

    $mdThemingProvider.theme('red-purple')
        .primaryPalette('red')
        .accentPalette('purple')
        .warnPalette('indigo');


    $stateProvider
        .state('dashboard.settings', {
            url: '/settings',
            templateUrl: '/dist/app/settings/partials/dashboard.settings.html',
            controller: 'settingsCtrl',
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function (me) {
                        if (me.admin) {
                            defer.resolve(200);
                        } else {
                            defer.reject(403);
                        }
                    });

                    return defer.promise;
                }]
            }
        });
}]);

app.run(['$rootScope', 'Settings', function ($rootScope, Settings) {

    var search = Settings.query(function (settings) {
        settings.forEach(function (setting) {
            if (setting.active) {
                $rootScope.settings = setting;
            }
        });
    });
}]);