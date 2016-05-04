app.controller('membersCtrl', ['$scope', 'Members', 'MembersCategory', '$mdToast', '$mdDialog', function ($scope, Members, MembersCategory, $mdToast, $mdDialog) {

    $scope.categories = MembersCategory.query();
    $scope.newCategory = new MembersCategory();

    $scope.members = Members.query();
    $scope.newMember = new Members();

    $scope.resetCategory = function () {
        $scope.newCategory = new MembersCategory();
    };

    $scope.reset = function () {
        $scope.newMember = new Members();
    };

    $scope.editCategory = function (category) {
        $scope.newCategory = category;
    };

    $scope.edit = function (member) {
        $scope.newMember = member;
    };

    $scope.newMember.categories = [];

    $scope.add = function () {
        var i = -1;
        var j = 0;

        $scope.members.forEach(function (member) {
            if (member.id === $scope.newMember.id) {
                i = j;
            }
            j = j++;
        });

        var fullCategory;

        $scope.categories.forEach(function (category) {
            if (category.id === $scope.newMember.category) {
                fullCategory = category;
            }
        });

        $scope.newMember.$save().then(function (success) {
            success.fullCategory = fullCategory;
            if (i >= 0) {
                $scope.members[i] = success;
            } else {
                $scope.members.push(success);
            };

            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.reset();
        }, function (err) {
            if (err.status === 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Unauthorized')
                    .position('right bottom')
                );
            } else {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            }
        });
    };

    $scope.addCategory = function () {
        var i = -1;
        var j = 0;

        $scope.categories.forEach(function (category) {
            if (category.id === $scope.newCategory.id) {
                i = j;
            }
            j = j++;
        });

        $scope.newCategory.$save().then(function (success) {
            if (i >= 0) {
                $scope.categories[i] = success;
            } else {
                $scope.categories.push(success);
            };

            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.resetCategory();
        }, function (err) {
            if (err.status === 401) {
                $mdToast.show(
                    $mdToast.simple()
                    .content('Unauthorized')
                    .position('right bottom')
                );
            } else {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            }
        });
    };

    $scope.delete = function ($event, member) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this member?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            member.$delete().then(function (success) {
                var i = $scope.members.indexOf(member);
                $scope.members.splice(i, 1);
                $scope.reset();
            }, function (err) {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            });
        });
    };

    $scope.deleteCategory = function ($event, category) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this category?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            category.$delete().then(function (success) {
                var i = $scope.categories.indexOf(category);
                $scope.categories.splice(i, 1);
                $scope.resetCategory();
            }, function (err) {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                    .content('An error occured!')
                    .position('right bottom')
                );
            });
        });
    };

<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
