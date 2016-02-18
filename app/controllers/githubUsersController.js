(function () {
    var githubUsersController = function($scope, githubApiService){
        console.log ('got controller');
        githubApiService.getUsers()
        .success(function(users){
            $scope.users = users;
        })
        .error(function(data, status, headers, config){
            $scope.users = {};
        });
        
        $scope.githubuser = githubApiService.getUser();
    };
    
    githubUsersController.$inject = ['$scope', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubUsersController',githubUsersController);
}());