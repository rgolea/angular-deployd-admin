var app = angular.module('app', ['ngResource', 'ngMaterial', 'ngAnimate', 'ngAria', 'ui.router', 'file-data-url']);

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
            abstract:true,
            data: {
                auth: true
            }
        }).state('dashboard.intro', {
            url: '/intro',
            templateUrl: '/dist/app/dashboard.intro.html',
            data: {
                auth: true
            }
        });
}]);

app.run(['$rootScope', 'Users', '$state', '$mdToast', function ($rootScope, Users, $state, $mdToast) {

    if (sessionStorage.authenticated) {
        $rootScope.me = Users.me();
    } else {
        $rootScope.$broadcast('user:logout');
    }

    $rootScope.$on('user:login', function () {
        $rootScope.me = Users.me();
        sessionStorage.setItem('authenticated', $rootScope.me);
    });

    $rootScope.$on('user:logout', function () {
        $state.go('login');
        delete sessionStorage.authenticated;
        delete $rootScope.me;
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate == true && $rootScope.me == undefined) {
            $state.go('login');
        };
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        if (error === 403) {
            $mdToast.show(
                $mdToast.simple()
                .content('Access denied.')
                .position('right bottom')
            );

            $state.go('dashboard.intro');
        } else {
            $mdToast.show(
                $mdToast.simple()
                .content(error)
                .position('right bottom')
            );
        }

    });
}]);