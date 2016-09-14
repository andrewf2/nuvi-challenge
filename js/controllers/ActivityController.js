'use strict';

/**
 * @ngInject
 */
function ActivityController($scope,$rootScope,$location,ActivityService,ActivityTools,ChartService,companyLogoMap,companyColorMap) {
    ActivityService.all().then(function(activities){
		ActivityTools.activitiesCallback(activities)
		$scope.providers = ActivityTools.getProviders();
		$scope.activities = ActivityTools.sortedActivities;
		$scope.activeProvider = $scope.providers[0];
		$scope.barChart = ChartService.chartMe($scope,document.getElementById("myChart"),"bar");
		$scope.pieChart = ChartService.chartMe($scope,document.getElementById("pieChart"),"pie");
	});
	$scope.images = companyLogoMap;
	$scope.companyColorMap = companyColorMap;

	$scope.setGraph = function(provider){
		$scope.activeProvider = provider;
	}
	
	$scope.goToActivities = function(provider){
		$location.path('/activities/'+ provider)
	}
}

window.app.controller('ActivityController', ActivityController);
