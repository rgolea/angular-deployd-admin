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