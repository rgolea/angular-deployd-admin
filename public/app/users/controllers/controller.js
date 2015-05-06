app.controller('usersCtrl', ['$scope', 'Users', '$state', '$rootScope', '$timeout', function ($scope, Users, $state, $rootScope, $timeout) {
    $scope.newUser = new Users();

    $scope.login = function () {
        $scope.newUser.$login().then(function (success) {
            $state.go('dashboard.users');
            $rootScope.$broadcast('user:login');
        }, function (err) {
            if (err.status == 401) {
                $scope.error = "Username or password invalid.";
            } else {
                $scope.error = "Fatal error. Please check log."
                console.log(err);
            };

            $rootScope.$broadcast('user:logout');
        });
    };

    $scope.logout = function () {
        $rootScope.$broadcast('user:logout');
    };

    $scope.users = Users.query();

    $rootScope.$on('user:login', function () {
        $scope.users = Users.query();
    });

    $rootScope.$on('user:logout', function () {
        $scope.users = Users.query();
    });

    $scope.refresh = function () {
        $scope.loading = true;
        $scope.users = Users.query(function () {
            $timeout(function () {
                $scope.loading = false;
            }, 500);
        });
    };
}]);