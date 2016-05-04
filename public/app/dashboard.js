app.controller('dashboardCtrl', ['$scope', '$mdSidenav', '$state', function($scope, $mdSidenav, $state){
    $scope.toggle = function () {
        $mdSidenav('right').toggle();
    };
<<<<<<< HEAD

    $scope.state = function(state){
        $state.go(state);
    };
}]);
=======
    
    $scope.state = function(state){
        $state.go(state);
    };
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
