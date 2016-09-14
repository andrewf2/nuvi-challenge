function ResponseController(ActivityTools,ActivityService,$routeParams,$scope,companyColorMap){
    ActivityService.find($routeParams.id).then(function(activity){
        $scope.messageType = 'text';
        $scope.activity = activity.data;
        if($scope.activity.activity_message.indexOf('http') != -1){
            $scope.messageType = "img";
        }
    })
    
    $scope.colorMap = companyColorMap
    
    
}
window.app.controller("ResponseController",ResponseController);