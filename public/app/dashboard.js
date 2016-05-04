app.controller('dashboardCtrl', ['$scope', '$mdSidenav', '$state', function($scope, $mdSidenav, $state){
    $scope.toggle = function () {
        $mdSidenav('right').toggle();
    };

    $scope.state = function(state){
        $state.go(state);
    };
    
    
    $scope.adminmenu = [
        {
          statelink : 'dashboard.intro',
          title: 'Home',
            ngif:'',
          icon: 'create'

        },
        {
          statelink : 'dashboard.content',
          title: 'Content',
            ngif:'me.admin || me.main',
          icon: 'web'
         
        },    
        
         {
          statelink : 'dashboard.members',
          title: 'Members',
            ngif:'me.admin || me.main',
          icon: 'web'
         
        },    
        {
          statelink : 'dashboard.polls',
          title: 'Polls',
            ngif:'me.admin || me.polls',
          icon: 'web'
         
        },  {
          statelink : 'dashboard.posts',
          title: 'Posts',
            ngif:'me.admin || me.posts',
          icon: 'web'
         
        }, 
        {
          statelink : 'dashboard.photos',
          title: 'Photos',
            ngif:'me.admin || me.posts || me.main',
          icon: 'web'
         
        },  
        {
          statelink : 'dashboard.services',
          title: 'Services',
            ngif:'me.admin || me.main',
          icon: 'web'
         
        }, 
        {
          statelink : 'dashboard.settings',
          title: 'Settings',
            ngif:'me.admin',
          icon: 'web'
         
        },  
         {
          statelink : 'dashboard.users',
          title: 'Users',
            ngif:'me.admin',
          icon: 'web'
         
        },  
      ];
}]);
