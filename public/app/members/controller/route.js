app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard.members', {
            url: '/members',
            templateUrl: '/dist/app/members/partials/dashboard.members.html',
            controller: 'membersCtrl',
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