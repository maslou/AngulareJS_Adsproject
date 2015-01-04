var softUni = angular.module('softUniModule', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/ads', {
			templateUrl: 'templates/all-ads.html'
		});

		$routeProvider.otherwise({redirectTo: '/ads'});
	});