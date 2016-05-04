app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.polls', {
            url: '/polls',
            templateUrl: '/dist/app/polls/partials/dashboard.polls.html',
            controller: 'pollsCtrl',
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function(me){
                        if (me.admin || me.polls) {
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
