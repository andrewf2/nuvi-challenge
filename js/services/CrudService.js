function CrudService($http,BaseURL){
    
  this.all = function(){
      
     return $http.get(BaseURL + "/"+this.resource).then(function(data){
       return data},
       function(err){
         return err;
       });
    
  }
  
  this.find = function(id){
      
    return $http.get(BaseURL + "/" + this.resource + "/" + id).then(function(data){
       return data},
       function(err){
         return err;
       });;
    
  }
  
  
  this.destory = function(id){
      
    return $http.delete(BaseURL + "/" + this.resource + "/"+ id).then(function(data){
       return data},
       function(err){
         return err;
       });
    
  }
  
  this.create = function(data){
      
     return $http.post( BaseURL + "/" + this.resource + "/new", data).then(function(data){
       return data},
       function(err){
         return err;
       });
     
  }
  
  this.save = function(data){
    return $http.post(BaseURL + "/" + this.resource,data).then(function(data){
       return data},
       function(err){
         return err;
       });
  }
  
  
  
}



window.app.service('CrudService', CrudService)