function ActivityTools (){
    var api = {};
    api.sortedActivities = {}

    api.sortByProvider = function(){
        angular.forEach(api.activities,function(activity){
			api.sortedActivities[activity.provider] = []
		});
		angular.forEach(api.activities,function(activity){
			api.sortedActivities[activity.provider].push(activity)
		});
		
    }
     api.getProviders = function(){
         return Object.keys(api.sortedActivities);
     }
     api.activitiesCallback = function(activities){
        api.activities = activities.data;
		api.sortByProvider();
     }
     
     api.getTotalActivities = function(){
         var total = 0;
         angular.forEach(api.sortedActivities,function(provider){
             total += provider.length;
         })
     }
     return api;
    
}

window.app.service('ActivityTools',ActivityTools);