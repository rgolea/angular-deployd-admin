var app = angular.module('app', ['ngResource', 'ngMaterial', 'ngAnimate', 'ngAria', 'ui.router', 'file-data-url', 'hc.marked', 'slugifier', 'ngFileUpload', 'ngTouch']);

if (window.location.host === 'localhost:2403') {
    app.value('SERVER_URL', 'http://localhost:2403');
} else {
    app.value('SERVER_URL', 'http://192.168.1.40:2403');
};

app.value('BASE_URL', 'http://'+window.location.host);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

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
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function (me) {
                        if (me.admin || me.main || me.posts || me.polls) {
                            defer.resolve(200);
                        } else {
                            defer.reject(403);
                        }
                    });

                    return defer.promise;
                }]
            }
        }).state('dashboard.intro', {
            url: '/intro',
            templateUrl: '/dist/app/dashboard.intro.html',
            resolve: {
                role: ['$q', 'Users', function ($q, Users) {
                    var defer = $q.defer();
                    Users.me(function (me) {
                        if (me.admin || me.main || me.posts || me.polls) {
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

app.run(['$rootScope', 'Users', '$state', '$mdToast', function ($rootScope, Users, $state, $mdToast) {

    if (sessionStorage.authenticated) {
        Users.me(function (me) {
            $rootScope.me = me;
        });
    } else {
        $rootScope.$broadcast('user:logout');
    }

    $rootScope.$on('user:login', function () {
        Users.me(function (me) {
            $rootScope.me = me;
        });
        sessionStorage.setItem('authenticated', $rootScope.me);
    });

    $rootScope.$on('user:logout', function () {
        Users.logout();
        delete sessionStorage.authenticated;
        delete $rootScope.me;
        $state.go('login');
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        Users.me(function (me) {
            $rootScope.me = me;
        });
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === 403) {
            $mdToast.show(
                $mdToast.simple()
                .content('Access denied.')
                .position('right bottom')
            );

        } else {
            console.log(error);
            $mdToast.show(
                $mdToast.simple()
                .content('An error occured!')
                .position('right bottom')
            );
        }

        Users.me(function (me) {
            if (me.main || me.posts || me.polls) {
                $state.go('dashboard.intro');
            } else {
                $state.go('login');
            }
        }, function(err){
            $state.go('login');
        });


    });
}]);