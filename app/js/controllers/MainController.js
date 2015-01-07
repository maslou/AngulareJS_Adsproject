softUni.controller('SoftUniController', function($scope, mainData, $location, $rootScope, $cookieStore){
	
	mainData.getAllAds(function(resp){
		$scope.allads=resp;
			if($location.path() =='/ads'){
				$scope.showAdds=$scope.allads;
			}
			else{
				$scope.showAdds=$scope.userads;
			}
	});

	mainData.getUserAllAds(function(resp){
		$scope.userads=resp;
			if($location.path() =='/ads'){
				$scope.showAdds=$scope.allads;
			}
			else{
				$scope.showAdds=$scope.userads;
			}
	});

	mainData.getAllTowns(function(resp){
		
		$scope.towns=resp;
	});

	mainData.getAllCategories(function(resp){
		$scope.categories=resp;
	});


	$rootScope.location = $location;
	function SetCredentials(uData){
		$rootScope.userData = uData;
		$cookieStore.put('userData', $rootScope.userData);

	};

	function ClearCredentials(){
		$rootScope.userData = {};
		$cookieStore.remove('userData');
	};

	$scope.addNewAdd = function(){
		mainData.addAds(
				function(resp){
					$scope.showsuccess = true;
					console.log(resp);
				},
				function(errormsg){
					$scope.error=errormsg;
				},
				$scope.adstitle,
				$scope.adstext,
				$scope.adsimageDataUrl,
				$scope.adscategoryId,
				$scope.adstownId
				)
	};


	$scope.adsDeActiv = function adsDeActiv(adsId){
		mainData.adsDeActiv(
				function(resp){
					$scope.showsuccess = true;
					console.log(resp);
				},
				function(errormsg){
					$scope.error=errormsg;
				},
				adsId
				)
	};

	$scope.adsEdit = function adsEdit(adsId){
		//mainData.adsEdit(
		//		function(resp){
		//			$scope.showsuccess = true;
		//			console.log(resp);
		//		},
		//		function(errormsg){
		//			$scope.error=errormsg;
		//		},
		//		adsId
		//		)
		$scope.error="EDIT ADS TO DO";
	};

	$scope.adsRePublish = function adsRePublish(adsId){
		mainData.adsRePublish(
				function(resp){
					$scope.showsuccess = true;
					console.log(resp);
				},
				function(errormsg){
					$scope.error=errormsg;
				},
				adsId
				)
	};

	$scope.adsDel = function adsDel(adsId){
		mainData.adsDel(
				function(resp){
					$scope.showsuccess = true;
					console.log(resp);
				},
				function(errormsg){
					$scope.error=errormsg;
				},
				adsId
				)
	};

	$scope.adsActive = function adsActive(adsId){
		console.log(adsId)
		mainData.adsActive(
				function(resp){
					$scope.showsuccess = true;
					console.log(resp);
				},
				function(errormsg){
					$scope.error=errormsg;
				},
				adsId
				)
	};	

	$scope.login = function(){
		$scope.error = undefined;
		$scope.dataLoading = true;
			
		mainData.login(
			function(resp){
				SetCredentials(resp);
				$scope.dataLoading = false;
				$location.path('/user/home');
			},
			$scope.username,
			$scope.password,
			function(errormsg){
				$scope.error=errormsg;
			})

			

			
	};
	$scope.register = function(){
			$scope.error = undefined;
			$scope.dataLoading = true;
			mainData.register(
				function(resp){
					SetCredentials(resp);
					$scope.dataLoading = false;
					$location.path('/user/home');
				},
				$scope.username,
				$scope.password,
				$scope.confirmPassword,
				$scope.name,
				$scope.email,
				$scope.phone,
				$scope.town,
				function(errormsg){
					$scope.error=errormsg;
				})
			

	}

	$scope.logout = function(){
		ClearCredentials();
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
	}


	$scope.setSelectedStatus = function setSelectedStatus(seladsStatus){
		$scope.selectedStatus = seladsStatus;
		
	};

	
	$scope.setCurrTown = setCurrTown;
	$scope.resetCategoryAndTown = function(){
		$scope.currentCategory = undefined;
		$scope.currentCategoryName = "All";
		$scope.currentTown = undefined;
		$scope.currentTownName = "All";
	}

});

