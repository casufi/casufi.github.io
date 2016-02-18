(function () {
    var githubUserController = function($scope, $routeParams, githubApiService){
        var userName = $routeParams.userName;
        $scope.githubuser = githubApiService.getUser(userName);
    };
    
    githubUserController.$inject = ['$scope','$routeParams', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubUserController',githubUserController);
}());