softUni.factory('mainData', function($http, $log){
	return {
		getAllAds: function(success){
			$http({
				method: 'GET', 
				url: 'http://softuni-ads.azurewebsites.net/api/ads',
				params: {PageSize:10, startpage:1}
				})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		getAllTowns: function(success){
			$http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		getAllCategories: function(success){
			$http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		login: function(success, user, pass, error){
			$http({
				method: 'POST', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/login',
				params: {username:user, password:pass}
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
				error(data.error_description)
			})

		},
	}
});

softUni.factory('appCache', function ($cacheFactory) {
	return $cacheFactory('appCache');
});