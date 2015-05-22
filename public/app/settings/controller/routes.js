app.config(['$stateProvider', '$mdThemingProvider', function ($stateProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('red_pink')
        .primaryPalette('red')
        .accentPalette('pink');

    $mdThemingProvider.theme('red_purple')
        .primaryPalette('red')
        .accentPalette('purple');

    $mdThemingProvider.theme('red_deep-purple')
        .primaryPalette('red')
        .accentPalette('deep-purple');

    $mdThemingProvider.theme('red_indigo')
        .primaryPalette('red')
        .accentPalette('indigo');

    $mdThemingProvider.theme('red_blue')
        .primaryPalette('red')
        .accentPalette('blue');

    $mdThemingProvider.theme('red_light-blue')
        .primaryPalette('red')
        .accentPalette('light-blue');

    $mdThemingProvider.theme('red_cyan')
        .primaryPalette('red')
        .accentPalette('cyan');

    $mdThemingProvider.theme('red_teal')
        .primaryPalette('red')
        .accentPalette('teal');

    $mdThemingProvider.theme('red_green')
        .primaryPalette('red')
        .accentPalette('green');

    $mdThemingProvider.theme('red_light-green')
        .primaryPalette('red')
        .accentPalette('light-green');

    $mdThemingProvider.theme('red_lime')
        .primaryPalette('red')
        .accentPalette('lime');

    $mdThemingProvider.theme('red_yellow')
        .primaryPalette('red')
        .accentPalette('yellow');
    $mdThemingProvider.theme('red_amber')
        .primaryPalette('red')
        .accentPalette('amber');

    $mdThemingProvider.theme('red_orange')
        .primaryPalette('red')
        .accentPalette('orange');

    $mdThemingProvider.theme('red_deep-orange')
        .primaryPalette('red')
        .accentPalette('deep-orange');

    $mdThemingProvider.theme('red_brown')
        .primaryPalette('red')
        .accentPalette('brown');

    $mdThemingProvider.theme('red_grey')
        .primaryPalette('red')
        .accentPalette('grey');

    $mdThemingProvider.theme('red_blue-grey')
        .primaryPalette('red')
        .accentPalette('blue-grey');


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
    Settings.query(function (settings) {
        settings.forEach(function (setting) {
            if (setting.active) {
                $rootScope.settings = setting;
            }
        });
    });
}]);