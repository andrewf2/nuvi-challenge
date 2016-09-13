function ProviderController($scope,$rootScope,$location,ActivityService,ActivityTools,$routeParams){
    $scope.provider = $routeParams.provider
    ActivityService.all().then(function(activities){
        ActivityTools.activitiesCallback(activities);
        $scope.activities = ActivityTools.sortedActivities[$scope.provider];
    })
    

    
    
}

window.app.controller('ProviderController',ProviderController)