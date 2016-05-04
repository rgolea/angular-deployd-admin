app.controller('mainCtrl', ['$scope', '$mdSidenav', '$state', 'Content', 'ServicesCategory', 'Members', 'Questions', 'Email', 'DEFAULT_EMAIL', '$mdToast', 'Posts', function ($scope, $mdSidenav, $state, Content, ServicesCategory, Members, Questions, Email, DEFAULT_EMAIL, $mdToast, Posts) {

    $scope.posts = Posts.query({static:true});

    $scope.serviceCategories = ServicesCategory.query({
        includeServices: true
    });
    $scope.members = Members.query();
    $scope.questions = Questions.query();
<<<<<<< HEAD

    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };

=======
    
    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };
    
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
    $scope.goPost = function(post){
        $state.go('posts.detail', {slug: post.slug})
    };

    $scope.state = function (state) {
        $state.go(state);
    };

    Content.query(function (contents) {
        $scope.otherContents = [];
        contents.forEach(function (content) {
            if (content.about) {
                $scope.aboutContent = content;
            } else {
                $scope.otherContents.push(content);
            }
        });
    });

    var resetPoll = function () {
        $scope.newPoll = {};
        $scope.newPoll.answers = new Array();
    };
<<<<<<< HEAD

    resetPoll();

=======
    
    resetPoll();
    
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
    $scope.sendContactForm = function () {
        var poll = new Email();
        poll.to = DEFAULT_EMAIL;
        poll.subject = 'Pagina de contact';
        poll.text = [
            $scope.contact.name,
            $scope.contact.lastName,
            $scope.contact.email,
            '---------------------',
            $scope.contact.message
        ].join('\n');
        poll.$save().then(function () {
            $mdToast.show(
                $mdToast.simple()
                .content('Mesajul a fost trimis. Multumim.')
                .position('right bottom')
                .parent(angular.element(document.getElementById('contactForm')))
            );
<<<<<<< HEAD

=======
            
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
            $scope.contact = {};
        }, function (err) {
            console.log(err);
            $mdToast.show(
                $mdToast.simple()
                .content('S-a produs o eroare. Va rugam sa contactati cu centrul.')
                .position('right bottom')
            );
        })
    };

    $scope.sendPoll = function () {
        var poll = new Email();
        poll.to = DEFAULT_EMAIL;
        poll.subject = 'Rezultate Chestionar';
        poll.text = [
            $scope.newPoll.fullName,
            $scope.newPoll.tel,
            $scope.newPoll.email,
            $scope.newPoll.address,
            '---------------------',
            $scope.newPoll.answers.join('\n')
        ].join('\n');
        poll.$save().then(function () {
            $mdToast.show(
                $mdToast.simple()
                .content('Chestionar trimis. Multumim.')
                .position('right bottom')
                .parent(angular.element(document.getElementById('polls')))
            );
<<<<<<< HEAD

=======
            
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
            resetPoll();
        }, function (err) {
            console.log(err);
            $mdToast.show(
                $mdToast.simple()
                .content('S-a produs o eroare. Va rugam sa contactati cu centrul.')
                .position('right bottom')
            );
        })
    };

}]);

app.factory('Email', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/email/:id', {
        id: "@id"
    });
}]);

app.directive('menu', function(){
    return {
        restrict: 'E',
        templateUrl: '/dist/app/main/layout.html',
        replace: true,
        controller: 'mainCtrl'
    };
<<<<<<< HEAD
});
=======
});
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
