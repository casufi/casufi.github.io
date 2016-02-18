(function () {
    var githubApiService = function($http){
        
        var users = $http.get('https://api.github.com/users');
        
        this.getUsers = function(){
          return users;  
        };
        this.getUser = function(userName){
          return {};  
        };
    };
    githubApiService.$inject = ['$http'];
    angular.module('appMLSDevTA').service('githubApiService',githubApiService);
}());