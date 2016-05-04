app.controller('postsCtrl', ['$scope', 'Posts', '$mdSidenav', '$rootScope', 'Slug', '$mdToast', '$mdDialog', 'Comments', function ($scope, Posts, $mdSidenav, $rootScope, Slug, $mdToast, $mdDialog, Comments) {
    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };

    $scope.posts = Posts.query({
        includeAuthor: true
    });

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
<<<<<<< HEAD
        var i = -1;
        var j = 0;

=======
        var i = -1; 
        var j = 0;
        
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
        $scope.posts.forEach(function(post){
            if(post.id === $scope.newPost.id){
                i = j;
            }
            j = j++;
        });
<<<<<<< HEAD

=======
        
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
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
                if(post.id === $scope.newPost.id){
                    delete $scope.comments;
                    $scope.hideComments();
                }
                $scope.reset();
<<<<<<< HEAD

=======
                
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
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

    $scope.newComment = new Comments();

    $scope.revealComments = function () {
        $scope.showComments = true;
        $scope.comments = Comments.query({
            postId: $scope.newPost.id
        });
    };

    $scope.hideComments = function () {
        $scope.showComments = false;
        delete $scope.comments;
    };

    $scope.deleteComment = function ($event, comment) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this comment?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            comment.$delete().then(function (success) {
                var i = $scope.comments.indexOf(comment);
                $scope.comments.splice(i, 1);
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

    $scope.allow = function ($event, comment) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to allow this comment on the site?')
            .ariaLabel('Allow comment dialog')
            .ok('Allow')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            comment.allow = true;
            comment.$save().then(function (success) {
                var i = $scope.comments.indexOf(comment);
                $scope.comments[i] = Comments.get({id: comment.id});
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

    $scope.addComment = function () {
        $scope.newComment.postId = $scope.newPost.id;
        $scope.newComment.userId = $rootScope.me.id;
        $scope.newComment.allow = true;
        $scope.newComment.$save().then(function (success) {
            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
            $scope.comments.push(Comments.get({id: success.id}));
            $scope.newComment = new Comments();
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

<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
