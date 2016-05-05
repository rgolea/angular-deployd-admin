app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.photos', {
            url: '/photos',
            templateUrl: '/dist/app/photos/partials/dashboard.photos.html',
            controller: 'photosCtrl',
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function(me){
                        if (me.admin || me.posts || me.main) {
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


   //-- PV
//      var customAmberMap = $mdThemingProvider.extendPalette('amber', {
//                'contrastDefaultColor': 'light',
//                'contrastDarkColors': ['50'],
//                '50': 'ffffff'
//            });
//            $mdThemingProvider.definePalette('customAmber', customAmberMap);
//            $mdThemingProvider.theme('default')
//                .primaryPalette('customAmber', {
//                    'default': '300',
//                    'hue-1': '50'
//                })
//                .accentPalette('orange') 
//    .warnPalette('indigo');
//            $mdThemingProvider.theme('input', 'default')
//                .primaryPalette('amber');
//                // configure html5 to get links working on jsfiddle
//            $locationProvider.html5Mode({
//                enabled: true,
//                requireBase: false
//            });