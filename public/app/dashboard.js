app.controller('dashboardCtrl', ['$scope', '$mdSidenav', '$state', function($scope, $mdSidenav, $state){
    $scope.toggle = function () {
        $mdSidenav('right').toggle();
    };
    
    $scope.state = function(state){
        $state.go(state);
    };
}]);