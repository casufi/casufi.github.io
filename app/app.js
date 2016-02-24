(function () {
    var app = angular.module('appMLSDevTA',['ngRoute', 'ngAnimate']);
    
	app.config(function($routeProvider){
		$routeProvider.when('/',{
			controller:'githubUsersController',
			templateUrl:'/app/views/githubusers.html'
		}).when('/githubuser/:userName',{
			controller:'githubUserController',
			templateUrl:'/app/views/githubuser.html'
		}).when('/repo/:ownerName/:repoName',{
			controller:'githubRepoController',
			templateUrl:'/app/views/githubrepo.html'
		}).otherwise({redirectTo:'/'});
	});
	app.$inject = ['$routeProvider'];
	
	app.directive('imageOnload', function() {
    	return {
        	restrict: 'A',
        	link: function(scope, element, attrs) {
            	element.bind('load', function() {
                	scope.$apply(attrs.imageOnload);
                	// usage: <img ng-src="src" image-onload="imgLoadedCallback()" />
            	});
        	}
    	};
	});
 }());