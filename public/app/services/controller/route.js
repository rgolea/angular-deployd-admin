app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.services', {
            url: '/services',
            templateUrl: '/dist/app/services/partials/dashboard.services.html',
            controller: 'servicesCtrl',
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
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
