app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.posts', {
            url: '/posts',
            templateUrl: '/dist/app/posts/partials/dashboard.posts.html',
            controller: 'postsCtrl',
            data: {
                auth: true
            },
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function(me){
                        if (me.admin || me.posts) {
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