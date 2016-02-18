(function () {
    var githubApiService = function($http){
        var githubusers = [];
        
        this.getUsersCashed = function(){
            return  githubusers;   
        }
        
        this.setUsersCashed = function(users){
            githubusers = users;
        }
        
        this.getUserCashed = function(username){
            if (typeof githubusers.filter === "function" && username){
                var filteredusers = githubusers.filter(function(element){
                    if (element && element.login && element.login === username) return 1
                    else return 0;
                });
                console.log(filteredusers);
                if (filteredusers && filteredusers[0]) return filteredusers[0]
                else return {}
            }else{
                return {}
            }
        }
        
        this.getUsers = function(){
          var users = $http.get('https://api.github.com/users');
          return users;  
        };
        this.getUser = function(username){
          var user = $http.get('https://api.github.com/users/'+username);
          return user;
        };
    };
    githubApiService.$inject = ['$http'];
    angular.module('appMLSDevTA').service('githubApiService',githubApiService);
}());