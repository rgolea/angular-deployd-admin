app.controller('commentsCtrl', ['$scope', 'Posts', '$mdSidenav', '$rootScope', '$mdToast', '$mdDialog', 'Comments', function ($scope, Posts, $mdSidenav, $rootScope, $mdToast, $mdDialog, Comments) {
    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };

    $scope.posts = Posts.query();
    
    $scope.newComment = new Comments();
    
    $scope.find = function(post){
        $scope.comments = Comments.query({postId: post.id});
    };
}]);