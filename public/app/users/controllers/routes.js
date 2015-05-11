app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/dist/app/dashboard.html',
            abstract: true,
            authenticate: true
        })
        .state('dashboard.users', {
            url: '/users',
            templateUrl: '/dist/app/users/partials/dashboard.users.html',
            controller: 'usersCtrl'
        });
}]);