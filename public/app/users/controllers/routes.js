app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.users', {
            url: '/users',
            templateUrl: '/dist/app/users/partials/dashboard.users.html',
            controller: 'usersCtrl',
            data: {
                auth: true,
            },
            resolve: {
                role: ['$rootScope', '$q', function ($rootScope, $q) {
                    var defer = $q.defer();

                    if ($rootScope.me.admin) {
                        defer.resolve(200);
                    } else {
                        defer.reject(403);
                    }

                    return defer.promise;
                }]
            }
        });
}]);