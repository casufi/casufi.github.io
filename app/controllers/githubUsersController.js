(function () {
    var githubUsersController = function($scope, githubApiService){
        $scope.setImgLoaded= function(user){
            user.imgloaded = 1;
        }
        githubApiService.getUsers()
        .success(function(users){
            if (typeof users.forEach === "function"){
                users.forEach(function(element){
                    if (element.login) githubApiService.getUser(element.login)
                    .success(function(user){
                        element.userdata = user;
                        githubApiService.setUsersCashed(users);
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