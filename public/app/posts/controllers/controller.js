app.controller('postsCtrl', ['$scope', 'Posts', '$mdSidenav', '$rootScope', 'Slug', '$mdToast', '$mdDialog', function ($scope, Posts, $mdSidenav, $rootScope, Slug, $mdToast, $mdDialog) {
    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };

    $scope.posts = Posts.query({includeAuthor: true});

    $scope.newPost = new Posts();
    $scope.newPost.tags = [];

    $scope.slugify = function () {
        $scope.newPost.slug = Slug.slugify($scope.newPost.title);
    };

    $scope.reset = function () {
        $scope.newPost = new Posts();
        $scope.newPost.tags = [];
    };

    $scope.show = function (post) {
        $scope.newPost = post;
    };

    $scope.save = function () {
        var i = $scope.posts.indexOf($scope.newPost);
        $scope.newPost.$save().then(function (success) {
            if (i > 0) {
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