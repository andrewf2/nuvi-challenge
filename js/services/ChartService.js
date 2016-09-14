function ChartService(ActivityTools,companyColorMap){
    var api = {};
    
    api.getProviderData = function(){
        var colors = []
        var activityCount = []
        var providers = ActivityTools.getProviders();
        angular.forEach(providers,function(provider){
            colors.push(companyColorMap[provider]);
            activityCount.push(ActivityTools.sortedActivities[provider].length)
        })
        return {"colors":colors, "activityCount":activityCount}
    }
    api.chartMe = function($scope,ctx,chartType){
        return  new Chart(ctx, {
            type: chartType,
            data: {
                labels: ActivityTools.getProviders(),
                datasets: [{
                    label: '# of activities',
                    data: api.getProviderData().activityCount,
                    backgroundColor: api.getProviderData().colors,
                    borderColor: 'black',
                    borderWidth: 2
                }]
            } ,
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
    }
    return api;
}
window.app.factory('ChartService', ChartService)
