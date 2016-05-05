app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('admin.photos', {
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