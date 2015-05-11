app.controller('usersCtrl', ['$scope', 'Users', '$state', '$rootScope', '$timeout', '$mdDialog', '$mdToast', function ($scope, Users, $state, $rootScope, $timeout, $mdDialog, $mdToast) {

    //    Setting up
    $scope.newUser = new Users();
    $scope.users = Users.query();
    $rootScope.$on('user:login', function () {
        $scope.users = Users.query();
    });

    $rootScope.$on('user:logout', function () {
        delete $scope.users;
    });

    //    Save form

    $scope.save = function () {
        var i = $scope.users.indexOf($scope.newUser);
        $scope.newUser.$save().then(function (success) {
            if (i > 0) {
                $scope.users[i] = success;
            } else {
                $scope.users.push(success);
            };

            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.reset();
            $scope.showForm = false;
        }, function (err) {
            console.log(err);
            $mdToast.show(
                $mdToast.simple()
                .content('An error occured!')
                .position('right bottom')
            );
        });
    };

    //    Reset form

    $scope.reset = function () {
        $scope.newUser = new Users();
    };

    //    Log in user

    $scope.login = function () {
        $scope.newUser.$login().then(function (success) {
            $state.go('dashboard.intro');
            $rootScope.$broadcast('user:login');
        }, function (err) {
            if (err.status == 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Username or password invalid!')
                    .position('right bottom')
                );
            } else {
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured. Please check log.')
                    .position('right bottom')
                );
                console.log(err);
            };

            $rootScope.$broadcast('user:logout');
        });
    };

    //    Log out user
    $scope.logout = function () {
        $rootScope.$broadcast('user:logout');
    };

    //    Prepare form for adding
    $scope.add = function () {
        $scope.showForm = true;
        $scope.newUser = new Users();
    };

    //    Prepare form for editing
    $scope.edit = function (user) {
        $scope.showForm = true;
        $scope.newUser = user;
    };

    $scope.delete = function ($event, user) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this user?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            user.$delete().then(function (success) {
                var i = $scope.users.indexOf(user);
                $scope.users.splice(i, 1);
            }, function (err) {
                console.log(err);
            });
        });
    };

    $scope.verifyAdmin = function (valChild) {
        if (!valChild) {
            $scope.newUser.admin = false;
        };
    };

    $scope.isAdmin = function () {
        if ($scope.newUser.admin) {
            $scope.newUser.main = true;
            $scope.newUser.polls = true;
            $scope.newUser.posts = true;
        }
    };

}]);