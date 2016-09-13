function ActivityService ($q,CrudService){
	this.resource = 'activities';

	angular.extend(ActivityService.prototype, CrudService);
};
window.app.service('ActivityService', ActivityService)