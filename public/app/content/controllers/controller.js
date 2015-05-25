app.controller('contentCtrl', ['$scope', 'Content', '$mdSidenav', '$mdToast', '$mdDialog', function ($scope, Content, $mdSidenav, $mdToast, $mdDialog) {

    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };
    
    $scope.posts = Content.query();
    
    $scope.newPost = new Content();

    $scope.reset = function () {
        $scope.newPost = new Content();
    };
    
    $scope.show = function (post) {
        $scope.newPost = post;
    };
    
    $scope.save = function () {
        var i = -1; 
        var j = 0;
        
        $scope.posts.forEach(function(post){
            if(post.id === $scope.newPost.id){
                i = j;
            }
            j = j++;
        });
        
        $scope.newPost.$save().then(function (success) {
            if (i >= 0) {
                $scope.posts[i] = success;
            } else {
                $scope.posts.push(success);
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
    
    $scope.delete = function ($event, post) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this post?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            post.$delete().then(function (success) {
                var i = $scope.posts.indexOf(post);
                $scope.posts.splice(i, 1);
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
}]);