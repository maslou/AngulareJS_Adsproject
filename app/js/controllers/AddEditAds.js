softUni.controller('AddEditAds', 
	function($scope, mainData, $location, $rootScope, $cookieStore){

	addNewAdd = function(){
		mainData.addAds(
			function(resp){
				$scope.showsuccess = true;
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			$scope.adstitle,
			$scope.adstext,
			$scope.adsimageDataUrl,
			$scope.adscategoryId,
			$scope.adstownId.id
			)
	};

	function editAds(adsId){
		mainData.adsEdit(
			function(resp){
				$scope.showsuccess = true;
				console.log(resp);
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			$scope.adsId,
			$scope.adstitle,
			$scope.adstext,
			$scope.adsimageDataUrl,
			$scope.adscategoryId,
			$scope.adstownId,
			$scope.adschangeimage
			);
	};

	$scope.addNewAddOrEdit = function(adsId){
		
		if ($location.path() == '/user/ads/publish'){
			addNewAdd();
		}
		else if ($location.path() == '/user/ads/edit') {
			editAds(adsId);
		}
	};
});