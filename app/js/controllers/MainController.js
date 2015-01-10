softUni.controller('SoftUniController', function($scope, mainData, $location, $rootScope, $cookieStore){
	var pageSize = 10;
	var startpage = 1;
	$scope.selectPage = function(number){
		startpage = number;
		if($location.path() =='/ads'){
			callGetAllAds();
		}
		else{
			callGetUserAds();
		}

	};
	function setPaging(numPages){
		console.log(numPages);
		$scope.pages = [];
		for (var i = 1; i <= numPages; i++) {
			var tempPageObj = {number: i, text:i};
			$scope.pages.push(tempPageObj);
		};
		
	};

	callGetAllAds = function(){
		mainData.getAllAds(function(resp){
		$scope.allads=resp;
		if($location.path() =='/ads'){
			$scope.showAdds=$scope.allads;
			setPaging(resp.numPages)
		}
		else
		{
		$scope.showAdds=$scope.userads;
		}
	},
	pageSize, startpage, $scope.currentTown, $scope.currentCategory)
	};

	callGetAllAds();

	callGetUserAds = function(){ 
		mainData.getUserAllAds(function(resp){
			$scope.userads=resp;
			
			if($location.path() =='/ads'){
				$scope.showAdds=$scope.allads;
			}
			else
			{
				$scope.showAdds=$scope.userads;
				setPaging(resp.numPages);
			}
		}, 
		pageSize, startpage)
	};

	callGetUserAds();

	mainData.getAllTowns(function(resp){
		$scope.towns=resp;
	});

	mainData.getAllCategories(function(resp){
		$scope.categories=resp;
	});

	$rootScope.location = $location;

	$scope.onAddNewClick = function(){
		$rootScope.adstitle = undefined;
		$rootScope.adstext = undefined;
		$rootScope.adsimageDataUrl = undefined;
		$rootScope.adscategoryId = undefined;
		$rootScope.adstownId = undefined;
		$location.path('/user/ads/publish');
	}

	$scope.adsDeActiv = function adsDeActiv(adsId){
		mainData.adsDeActiv(
			function(resp){
				$scope.showsuccess = true;
				console.log(resp);
				callGetUserAds();
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			adsId
		)
	};

	$scope.adsEditClick = function(adsId){
		$rootScope.adsId = adsId;
		$location.path('/user/ads/edit');
	}

	$scope.adsRePublish = function adsRePublish(adsId){
		mainData.adsRePublish(
			function(resp){
				$scope.showsuccess = true;
				callGetUserAds();
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			adsId
		);
	};

	$scope.adsDel = function adsDel(adsId){
		mainData.adsDel(
			function(resp){
				$scope.showsuccess = true;
				callGetUserAds();
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			adsId
		);
	};

	$scope.adsActive = function adsActive(adsId){
		mainData.adsActive(
			function(resp){
				$scope.showsuccess = true;
				callGetUserAds();
			},
			function(errormsg){
				$scope.error=errormsg;
			},
			adsId
		);
	};	

	$scope.currentCategory = undefined;
	$scope.currentCategoryName = "All";

	function setCurrCategory(cat, catName){
		$scope.currentCategory=cat;
		if(catName){
			$scope.currentCategoryName = catName;
		}
		else{
			$scope.currentCategoryName = "All";
		}	

		callGetAllAds();
	}
	
	$scope.setCurrCategory = setCurrCategory;
	$scope.currentTown = undefined;
	$scope.currentTownName = "All";

	function setCurrTown(town, townName){
		$scope.currentTown=town;

		if(townName){
			$scope.currentTownName = townName;
		}
		else{
			$scope.currentTownName = "All";
		}

		callGetAllAds();
	}

	
	$scope.setCurrTown = setCurrTown;
	$scope.resetCategoryAndTown = function(){
		$scope.currentCategory = undefined;
		$scope.currentCategoryName = "All";
		$scope.currentTown = undefined;
		$scope.currentTownName = "All";
	}

	$scope.setSelectedStatus = function setSelectedStatus(seladsStatus){
		$scope.selectedStatus = seladsStatus;
		
	};

	$scope.logout = function(){
		ClearCredentials();
	};

	function ClearCredentials(){
		$rootScope.userData = {};
		$cookieStore.remove('userData');
	};

});

