(function () {
    var githubUserController = function($scope, $routeParams, githubApiService){
        
        console.log("Hello world");
        var userName = $routeParams.userName;
        console.log(userName);
        $scope.githubuser = githubApiService.getUserCashed(userName);
        
        if ((!$scope.githubuser||!$scope.githubuser.login) && userName){
            githubApiService.getUser(userName)
            .success(function(user){
                $scope.githubuser = user;
            })
            .error(function(data, status, headers, config){
                $scope.githubuser = {};
            });            
        }
        
    };
    
    githubUserController.$inject = ['$scope','$routeParams', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubUserController',githubUserController);
}());