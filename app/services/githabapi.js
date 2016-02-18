(function () {
    var githubApiService = function($http){
        
        this.getUsers = function(){
          var users = $http.get('https://api.github.com/users');
          return users;  
        };
        this.getUser = function(userName){
          var user = $http.get('https://api.github.com/users/'+userName);
          return user;
        };
    };
    githubApiService.$inject = ['$http'];
    angular.module('appMLSDevTA').service('githubApiService',githubApiService);
}());