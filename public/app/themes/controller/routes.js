app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.themes', {
            url: '/themes',
            templateUrl: '/dist/app/themes/partials/dashboard.themes.html',
            controller: 'themesCtrl',
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function(me){
                        if (me.admin || me.main) {
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