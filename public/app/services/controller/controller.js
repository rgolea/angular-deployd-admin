app.controller('servicesCtrl', ['$scope', 'Services', 'ServicesCategory', '$mdToast', '$mdDialog', function ($scope, Services, ServicesCategory, $mdToast, $mdDialog) {

    $scope.categories = ServicesCategory.query();
    $scope.newCategory = new ServicesCategory();

    $scope.services = Services.query();
    $scope.newService = new Services();

    $scope.resetCategory = function () {
        $scope.newCategory = new ServicesCategory();
    };

    $scope.reset = function () {
        $scope.newService = new Services();
    };

    $scope.editCategory = function (category) {
        $scope.newCategory = category;
    };

    $scope.edit = function (service) {
        $scope.newService = service;
    };

    $scope.newService.categories = [];

    $scope.add = function () {
        var i = -1;
        var j = 0;

        $scope.services.forEach(function (service) {
            if (service.id === $scope.newService.id) {
                i = j;
            }
            j = j++;
        });
<<<<<<< HEAD

        var relatedCategory;

=======
        
        var relatedCategory;
        
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
        $scope.categories.forEach(function (category) {
            if ($scope.newService.category === category.id) {
                relatedCategory = category;
            }
        });

        $scope.newService.$save().then(function (success) {
<<<<<<< HEAD

            success.relatedCategory = relatedCategory;

=======
            
            success.relatedCategory = relatedCategory;
            
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
            if (i >= 0) {
                $scope.services[i] = success;
            } else {
                $scope.services.push(success);
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

    $scope.delete = function ($event, service) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this service?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            service.$delete().then(function (success) {
                var i = $scope.services.indexOf(service);
                $scope.services.splice(i, 1);
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
