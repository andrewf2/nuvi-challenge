function GeoService($http,$q){
    this.getCountry = function(lng,lat){
        var deffered = $q.defer()
        if(lng == null || lat == null){
            deffered.reject("No country Data");
        }else{
            $http.get('http://api.geonames.org/countrySubdivisionJSON?lat='+lat.split('.')[0]+'&lng='+lng.split('.')[0]+'&username=andrewf02').then(function(data){
                deffered.resolve(data);
            });
        }
        return deffered.promise
    }
}

window.app.service('GeoService',GeoService)