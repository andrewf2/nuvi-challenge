function ResponseController(ActivityTools,ActivityService,$routeParams,$scope,companyColorMap,companyLogoMap,GeoService){
    ActivityService.find($routeParams.id).then(function(activity){
        $scope.messageType = 'text';
        $scope.activity = activity.data;
        if($scope.activity.activity_message.indexOf('http') != -1){
            $scope.messageType = "img";
        }
        console.log($scope.activity)
        GeoService.getCountry($scope.activity.activity_longitude,$scope.activity.activity_latitude).then(function(data){
            console.log(data)
            $scope.country = data.countryName;
        })
    })
    $scope.colorMap = companyColorMap;
    $scope.images = companyLogoMap;
}
window.app.controller("ResponseController",ResponseController);