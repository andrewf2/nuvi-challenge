function ProviderController($scope,$rootScope,$location,ActivityService,ActivityTools,$routeParams){
    $scope.provider = $routeParams.provider
    ActivityService.all().then(function(activities){
        ActivityTools.activitiesCallback(activities);
        $scope.activities = ActivityTools.sortedActivities[$scope.provider];
    })
    $scope.goToActivity = function(id){
        $location.path('activity/'+id);
    }
 
}

window.app.controller('ProviderController',ProviderController)