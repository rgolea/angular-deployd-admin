app.controller('themesCtrl', ['$scope', 'Themes', '$mdToast', '$mdDialog', function ($scope, Themes, $mdToast, $mdDialog) {
    $scope.themes = Themes.query();
    $scope.newTheme = new Themes();
    
    $scope.reset = function(){
        $scope.newTheme = new Themes();
    };

    $scope.save = function () {
        var i, j;

        $scope.themes.forEach(function (theme) {
            if (theme.id === $scope.newTheme.id) {
                i = j;
            }
            j = j++;
        });

        
        $scope.newTheme.$save().then(function (success) {
            if (i > 0) {
                $scope.themes[i] = success;
            } else {
                $scope.themes.push(success);
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
    
    $scope.delete = function ($event, theme) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this theme?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            theme.$delete().then(function (success) {
                var i = $scope.themes.indexOf(theme);
                $scope.themes.splice(i, 1);
                $scope.reset();
                
            }, function (err) {
                console.log(err);
                if (err.status === 401) {
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Unauthorized.')
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
        });
    };

    $scope.open = function (theme) {
        $scope.newTheme = theme;
    };
}]);