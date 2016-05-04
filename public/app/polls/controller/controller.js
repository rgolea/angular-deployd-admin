app.controller('pollsCtrl', ['$scope', 'Questions', '$mdSidenav', '$mdToast', '$mdDialog', function ($scope, Questions, $mdSidenav, $mdToast, $mdDialog) {

    $scope.toggle = function () {
        $mdSidenav('left').toggle();
    };
<<<<<<< HEAD

    $scope.questions = Questions.query();


=======
    
    $scope.questions = Questions.query();
    
    
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
    $scope.newQuestion = new Questions();
    $scope.newQuestion.answers = [];

    $scope.addQuestion = function(){
        $scope.newQuestion.answers.push({text: ''});
    };
<<<<<<< HEAD

=======
    
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
    $scope.reset = function () {
        $scope.newQuestion = new Questions();
        $scope.newQuestion.answers = [];
    };
<<<<<<< HEAD

    $scope.show = function (question) {
        $scope.newQuestion = question;
    };

    $scope.save = function () {
        var i = -1;
        var j = 0;

=======
    
    $scope.show = function (question) {
        $scope.newQuestion = question;
    };
    
    $scope.save = function () {
        var i = -1; 
        var j = 0;
        
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
        $scope.questions.forEach(function(question){
            if(question.id === $scope.newQuestion.id){
                i = j;
            }
            j = j++;
        });
<<<<<<< HEAD

=======
        
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
        $scope.newQuestion.$save().then(function (success) {
            if (i >= 0) {
                $scope.questions[i] = success;
            } else {
                $scope.questions.push(success);
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
<<<<<<< HEAD

=======
    
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
    $scope.delete = function ($event, question) {
        $mdDialog.show(
            $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Delete')
            .content('Are you sure you want to delete this question?')
            .ariaLabel('Delete dialog')
            .ok('Delete')
            .cancel('Cancel')
            .targetEvent($event)
        ).then(function () {
            question.$delete().then(function (success) {
                var i = $scope.questions.indexOf(question);
                $scope.questions.splice(i, 1);
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
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
