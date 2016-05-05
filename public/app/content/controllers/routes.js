app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.content', {
            url: '/content',
            templateUrl: '/dist/app/content/partials/dashboard.content.html',
            controller: 'contentCtrl',
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
