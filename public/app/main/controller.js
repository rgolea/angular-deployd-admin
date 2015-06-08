app.controller('mainCtrl', ['$scope', '$mdSidenav', '$state', 'Content', 'ServicesCategory', 'Members', 'Questions',  function($scope, $mdSidenav, $state, Content, ServicesCategory, Members, Questions){

    
    $scope.serviceCategories = ServicesCategory.query({includeServices: true});
    $scope.members = Members.query();
    $scope.questions = Questions.query();
    
    $scope.currentStateName = $state.current.name;
    $scope.toggle = function(){
        $mdSidenav('left').toggle();
    };
    
    $scope.state = function(state){
        $state.go(state);
    };
    
    Content.query(function(contents){
        $scope.otherContents = [];
        contents.forEach(function(content){
            if(content.about){
                $scope.aboutContent = content;
            } else {
                $scope.otherContents.push(content);
            }
        });
    });
    
}]);