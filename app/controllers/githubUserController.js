(function () {
    var githubUserController = function($scope, $routeParams, githubApiService){
        
        var userName = $routeParams.userName;
        var fillRepos = function(githubuser){
            if (githubuser && githubuser.repos_url){
                githubApiService.getUserRepos(githubuser.repos_url)
                .success(function(repos){
                    githubuser.repos = repos;
                    githubApiService.setUserRepos(githubuser.login, repos)
                })
            }
        }
        
        $scope.githubuser = githubApiService.getUserCashed(userName);
        
        if ($scope.githubuser && !$scope.githubuser.repos) fillRepos($scope.githubuser);
        if ((!$scope.githubuser||!$scope.githubuser.login) && userName){
            githubApiService.getUser(userName)
            .success(function(user){
                $scope.githubuser = user;
                if ($scope.githubuser && !$scope.githubuser.repos) fillRepos($scope.githubuser);
            })
            .error(function(data, status, headers, config){
                $scope.githubuser = {};
            });            
        }
    };
    
    githubUserController.$inject = ['$scope','$routeParams', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubUserController',githubUserController);
}());