'use strict';

/**
 * @ngInject
 */
function ActivityController($scope,$rootScope,$location,ActivityService,ActivityTools) {
	$scope.providers = ['Twitter', 'Facebook', 'Instagram', 'Reddit'];
  
	ActivityService.all().then(function(activities){
		ActivityTools.activitiesCallback(activities)
		$scope.providers = ActivityTools.getProviders();
		$scope.activities = ActivityTools.sortedActivities;
		$scope.activeProvider = $scope.providers[0];
		var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Tumblr", "Facebook", "Instagram","Twitter"],
        datasets: [{
            label: '# of activities',
            data: [ActivityTools.sortedActivities[$scope.providers[0]].length, ActivityTools.sortedActivities[$scope.providers[1]].length, ActivityTools.sortedActivities[$scope.providers[2]].length, ActivityTools.sortedActivities[$scope.providers[3]].length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
	});
	
	$scope.setGraph = function(provider){
		$scope.activeProvider = provider;
	}
	$scope.goToActivities = function(provider){
		$location.path('/activities/'+ provider)
	}
	
	
}

window.app.controller('ActivityController', ActivityController);
