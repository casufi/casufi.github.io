(function () {
    var githubRepoController = function($scope, $routeParams, githubApiService){
        console.log("repo");
    };
    
    githubRepoController.$inject = ['$scope','$routeParams', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubRepoController',githubRepoController);
}());