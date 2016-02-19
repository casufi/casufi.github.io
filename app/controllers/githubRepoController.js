(function () {
    var githubRepoController = function($scope, $routeParams, githubApiService){
        var userName = $routeParams.ownerName;
        var repoName = $routeParams.repoName;
        
        var fillCommits = function(repo){
            console.log({"1":repo, "scope":$scope.githubrepo});
            if (repo.name && userName && repoName){
                githubApiService.getRepoCommits(userName, repoName)
                .success(function(commits){
                    repo.commits = commits;
                    console.log({"1.1": commits});
                    console.log({"1.2": $scope.githubrepo});
                })
            }
        };
        
        $scope.githubrepo = githubApiService.getUserRepoCashed(userName, repoName);
        if ($scope.githubrepo.name && !$scope.githubrepo.commits) {
            fillCommits($scope.githubrepo);
        }
        
        if ((!$scope.githubrepo||!$scope.githubrepo.name) && userName && repoName){
            githubApiService.getUserRepo(userName, repoName)
            .success(function(repo){
                $scope.githubrepo = repo;
                console.log({"2":$scope.githubrepo});
                if ($scope.githubrepo) fillCommits($scope.githubrepo);
            })
            .error(function(data, status, headers, config){
                $scope.githubrepo = {};
            });            
        }
    };
    
    githubRepoController.$inject = ['$scope','$routeParams', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubRepoController',githubRepoController);
}());