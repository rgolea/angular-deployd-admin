app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
<<<<<<< HEAD
        .state('admin.photos', {
=======
        .state('dashboard.photos', {
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
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
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
