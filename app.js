(function () {
    var app = angular.module('appMLSDevTA',['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider.when('/',{
			controller:'GithubUsersController',
			templateUrl:'/app/views/githubusers.html'
		}).when('/githubuser',{
			controller:'GithubUserController',
			templateUrl:'/app/views/githubuser.html'
		}).otherwise({redirectTo:'/'});
	});
 }());