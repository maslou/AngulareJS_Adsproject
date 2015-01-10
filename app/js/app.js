var softUni = angular.module('softUniModule', ['ngRoute', 'ngCookies'])
	.config(function($routeProvider){
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/ads', {
			templateUrl: 'templates/all-ads.html',
			controller: 'SoftUniController'
		});
		
		$routeProvider.when('/user/home', {
			templateUrl: 'templates/all-ads.html',
			controller: 'SoftUniController'
		});

		$routeProvider.when('/user/ads/edit', {
			templateUrl: 'templates/publish.html',
			controller: 'AddEditAds'
		});

		$routeProvider.when('/user/ads/publish', {
			templateUrl: 'templates/publish.html',
			controller: 'AddEditAds'
		});

		$routeProvider.otherwise({redirectTo: '/ads'});
	})

	.run(function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.userData = $cookieStore.get('userData') || {};
  
        //$rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            //if (($location.path() == '/user/home' )  && !$rootScope.userData.username) {
            //    $location.path('/ads');
           // }
        //});
    });