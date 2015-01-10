softUni.controller('AddEditAds', 
					function($scope, mainData, $location, $rootScope, $cookieStore){

	function arrObjIndexOf(objArr, sValue){
		
		for (var i = 0; i < objArr.length; i++){
			if(objArr[i].id == sValue.id){
				return i;
			}
		}
		return -1;
	};

	mainData.getUserAdsById(
		function(resp){
			var indxTown = arrObjIndexOf($scope.towns, 
				{id: resp.townId, name: resp.townName});
			var indxCat = arrObjIndexOf($scope.categories,
				{id: resp.categoryId, name: resp.categoryName});
			$scope.adsData = 
			{
				title: resp.title,
				text: resp.text,
				imageDataUrl: resp.imageDataUrl,
				//town: {id: resp.townId, name: resp.townName},
				town: $scope.towns[indxTown],
				category:$scope.categories[indxCat]
				// {id: resp.categoryId, name: resp.categoryName}
			};
			
		},
		$rootScope.adsId
		);


	addNewAdd = function(){
		mainData.addAds(
			function(resp){
				$scope.showsuccess = true;
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			{
				title: $scope.adsData.title,
				text: $scope.adsData.text,
				imageDataUrl: $scope.adsData.imageDataUrl,
				townId: $scope.adsData.town.id,
				categoryId: $scope.adsData.category.id
			}
			)
	};

	function editAds(adsId){
		mainData.adsEdit(
			function(resp){
				$scope.showsuccess = true;
				
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			$scope.adsId,
			{
				title: $scope.adsData.title,
				text: $scope.adsData.text,
				imageDataUrl: $scope.adsData.imageDataUrl,
				townId: $scope.adsData.town.id,
				categoryId: $scope.adsData.category.id
			}
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