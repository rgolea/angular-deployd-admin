app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/dist/app/main/main.html',
            controller: 'mainCtrl'
        });
}]);