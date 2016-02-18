(function () {
    var githubUsersController = function($scope, githubApiService){
        console.log ('got controller');
        githubApiService.getUsers()
        .success(function(users){
            if (typeof users.forEach === "function"){
                users.forEach(function(element){
                    if (element.login) githubApiService.getUser(element.login)
                    .success(function(user){
                        element.userdata = user;
                    })
                    .error(function(data, status, headers, config){
                        element.userdata = {};
                    });
                });
            }
            $scope.users = users;
        })
        .error(function(data, status, headers, config){
            $scope.users = {};
        });
    };
    
    githubUsersController.$inject = ['$scope', 'githubApiService'];
    angular.module('appMLSDevTA').controller('githubUsersController',githubUsersController);
}());