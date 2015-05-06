var app = angular.module('app', ['ngResource', 'ui.router', 'file-data-url']);

app.value('BASE_URL', '');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/dist/app/users/partials/login.html',
            controller: 'usersCtrl'
        })
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
        })
        .state('dashboard.users.add', {
            url: '/add',
            templateUrl: '/dist/app/users/partials/dashboard.users.addedit.html',
            controller: 'usersCtrl'
        });
}]);

app.run(['$rootScope', 'Users', '$state', function ($rootScope, Users, $state) {

    $rootScope.me = sessionStorage.authenticated;

    $rootScope.$on('user:login', function () {
        $rootScope.me = Users.me();
        sessionStorage.setItem('authenticated', $rootScope.me);
    });

    $rootScope.$on('user:logout', function () {
        $rootScope.me = Users.me();
        $state.go('login');
        sessionStorage.setItem('authenticated', $rootScope.me);
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log($rootScope.me);
        if (toState.authenticate == true && $rootScope.me == undefined) {
            $state.go('login');
        };
    });
}]);