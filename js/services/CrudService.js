function CrudService($http,BaseURL){
    
  this.all = function(){
      
     return $http.get(BaseURL + "/"+this.resource);
    
  }
  
  this.find = function(id){
      
    return $http.get(BaseURL + "/" + this.resource + "/" + id);
    
  }
  
  
  this.destory = function(id){
      
    return $http.delete(BaseURL + "/" + this.resource + "/"+ id)
    
  }
  
  this.create = function(data){
      
     return $http.post( BaseURL + "/" + this.resource + "/new", data)
     
  }
  
  this.save = function(data){
    return $http.post(BaseURL + "/" + this.resource,data)
  }
  
  
  
}



window.app.service('CrudService', CrudService)