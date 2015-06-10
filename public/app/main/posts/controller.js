app.controller('mainPostsCtrl', ['$scope', '$state', 'Posts', function ($scope, $state, Posts) {
    $scope.state = function (state) {
        $state.go(state);
    };

    $scope.avPosts = Posts.query();

    $scope.goPost = function (post) {
        $state.go('posts.detail', {
            slug: post.slug
        })
    };
}]);

app.controller('detailPostsCtrl', ['$scope', '$stateParams', 'Posts', 'Comments', '$mdToast', '$rootScope','BASE_URL', function ($scope, $stateParams, Posts, Comments, $mdToast, $rootScope, BASE_URL) {
    
    Posts.query({
        slug: $stateParams.slug,
        includeAuthor: true,
        includeAllowedComments: true
    }, function (posts) {
        $scope.post = posts[0];
    });
    
    $scope.logout = function () {
        $rootScope.$broadcast('user:logout');
    };
    
    $scope.redirectURL = BASE_URL + '%23%21/posts/'+ $stateParams.slug; 
    
    $scope.newComment = new Comments();

    $scope.addComment = function () {
        $scope.newComment.postId = $scope.post.id;
        $scope.newComment.userId = $rootScope.me.id;
        $scope.newComment.$save().then(function (success) {
            $mdToast.show(
                $mdToast.simple()
                .content('Saved!')
                .position('right bottom')
            );
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

}]);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('posts', {
            url: '/posts',
            templateUrl: '/dist/app/main/posts/main.posts.html',
            controller: 'mainPostsCtrl'
        }).state('posts.detail', {
            url: '/:slug',
            templateUrl: '/dist/app/main/posts/main.posts.detail.html',
            controller: 'detailPostsCtrl'
        });
}]);