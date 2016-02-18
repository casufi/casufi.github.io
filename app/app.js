(function () {
    var app = angular.module('appMLSDevTA',['ngRoute']);
    
	app.config(function($routeProvider){
		$routeProvider.when('/',{
			controller:'githubUsersController',
			templateUrl:'/app/views/githubusers.html'
		}).when('/githubuser/:userName',{
			controller:'githubUserController',
			templateUrl:'/app/views/githubuser.html'
		}).otherwise({redirectTo:'/'});
	});
 }());