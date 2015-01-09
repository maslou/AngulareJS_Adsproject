softUni.factory('mainData', function($http, $log,$rootScope){
	var UserData;
	return {
		getAllAds: function(success){
			$http({
				method: 'GET', 
				url: 'http://softuni-ads.azurewebsites.net/api/ads',
				params: {PageSize:5, startpage:1}
				})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		getUserAllAds: function(success){
			$http({
				method: 'GET', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
				headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
				params: {PageSize:5, startpage:1}
				})
			.success(function(data, status, headers, config){
				success(data);
				//$log.info(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		getUserAdsById: function(success, adsId){
			console.log(adsId);
			if (adsId) {
				$http({
					method: 'GET', 
					url: 'http://softuni-ads.azurewebsites.net/api/user/ads/'  + adsId,
					headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
					})
				.success(function(data, status, headers, config){
					$log.info(data);
					success(data);
					
				})
				.error(function(data, status, headers, config){
					$log.warn(data);
				})
			}
		},

		adsDeActiv: function(success, error, adsId){
			$http({
				method: 'PUT', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + adsId,
				headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
				})
			.success(function(data, status, headers, config){
				success(data);
				$log.info(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		adsEdit: function(
			success,
			error,
			adsId,
			adstitle,
			adstext,
			adsimageDataUrl,
			adscategoryId,
			adstownId,
			adschangeimage
			){
			$http({
				method: 'PUT', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads/' + adsId,
				headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
				data: {
					title: adstitle,
					text: adstext,
					imageDataUrl: adsimageDataUrl,
					categoryId: adscategoryId,
					townId: adstownId,
					changeimage: adschangeimage
				}})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
				error(data.modelState)
			})

		},

		adsRePublish: function(success, error, adsId){
			$http({
				method: 'PUT', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + adsId,
				headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
				
				})
			.success(function(data, status, headers, config){
				success(data);
				$log.info(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		adsDel: function(success, error, adsId){
			$http({
				method: 'DELETE', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads/'  + adsId,
				headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
				
				})
			.success(function(data, status, headers, config){
				success(data);
				$log.info(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})

		},

		adsActive: function(success, error, adsId){
			$http({
				method: 'PUT', 
				url: 'http://softuni-ads.azurewebsites.net/api/admin/ads/approve/'  + adsId,
				headers: {Authorization: 'Bearer ' + 'xmFLG1AWs7H85gR_0N0j1nxykcZoq9GoI3COyHJBvMivA5sZf19psNkQW0b_SRfD5E0w-c772isVgbKSzQVUw4dwIIvAc0Xrwg5_SvaHr0oeySGvV4prNJXq-uwtd2OFjGCBFTwUFl_EVJvOLrXMECG7wk8aXHI57fRROD4wYXcMM46z4wdUid88ojiwznw5EOdlRjXoG8LiSLrvTUWJOIKc7i_8NpwGOn366swE_EtXC9U2QL53b3trNJpvL_rvbYGYosdv7MN2sTZnL-CEYwk9r42TJQOjsU2UDgQ3v74QOnWnswhAy_Tht6Tj4gk93ZDElzj76CqJ7QAefhYTyjuvEbbF94WFfqQqs_3LY-Lk1pBCHVWS4i4Eo0hhD2uOYK8jKjp3oT52nb-VwdGvo-aI1ZedMA0SMVG7rTJJRfvHuZns1-yeZAkC9bvCgs07LKkQOPA8Ic3KDTc3EvHOAfP3ip0OHuHk58NAXKRSn9rbHdhsGMBcY43Ovx83N9JLE4ZwIqJ3P7Knbh-JqKhtuA'},
				
				})
			.success(function(data, status, headers, config){
				success(data);
				$log.info(data);
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
				data: {username:user, password:pass}
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
				error(data.error_description)
			})

		},
		register: function(success, user, pass, confirmPassword, name, email, phone, town, error){
			$http({
				method: 'POST', 
				url: 'http://softuni-ads.azurewebsites.net/api/user/register',
				data: {username:user, password:pass, confirmPassword: confirmPassword, name: name, email: email, phone:phone, townId:town }
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
				error(data.modelState)
			})

		},

		addAds: function(
			success,
			error,
			adstitle,
			adstext,
			adsimageDataUrl,
			adscategoryId,
			adstownId
			){
			console.log(adstownId);
			$http({
					method: 'POST', 
					url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
					headers: {Authorization: 'Bearer ' + $rootScope.userData.access_token},
					data: {
						title: adstitle,
						text: adstext,
						imageDataUrl: adsimageDataUrl,
						categoryId: adscategoryId,
						townId: adstownId
					}
				})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
				error(data.modelState)
			})

		},
	}
});

