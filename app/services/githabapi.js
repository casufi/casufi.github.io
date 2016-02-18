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
                    if (element && element.login && element.login === username && element.userdata) return 1
                    else return 0;
                });
                if (filteredusers && filteredusers[0]) return filteredusers[0].userdata
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
        
        this.getUserRepos = function(repolink){
          var repos = $http.get(repolink);
          return repos;
        };
        
        this.setUserRepos = function(username, repos){
            if (typeof githubusers.every === "function" && username){
                githubusers.every(function(item, i, arr){
                    if (item && item.login && item.login === username ){
                        githubusers[i].userdata.repos = repos;
                        return false;
                    } 
                    else return true;
                });
            }else{
                return {}
            }
        };
        

    };
    githubApiService.$inject = ['$http'];
    angular.module('appMLSDevTA').service('githubApiService',githubApiService);
}());