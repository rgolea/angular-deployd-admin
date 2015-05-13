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
//                role: ['$rootScope', '$q', function ($rootScope, $q) {
//                    var defer = $q.defer();
//
//                    if ($rootScope.me.admin || $rootScope.me.posts) {
//                        defer.resolve(200);
//                    } else {
//                        defer.reject(403);
//                    }
//
//                    return defer.promise;
//                }]
            }
        });
}]);