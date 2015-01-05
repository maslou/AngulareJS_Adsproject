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

	$scope.login = function(){
		$scope.error = undefined;
		$scope.dataLoading = true;
			
		mainData.login(
			function(resp){
				SetCredentials(resp);
			},
			$scope.username,
			$scope.password,
			function(errormsg){
				$scope.error=errormsg;
			})

			$scope.dataLoading = false;
			$location.path('/user/home');

			
		}
	$scope.register = function(){
			$scope.error = undefined;
			$scope.dataLoading = true;
			mainData.register(
				function(resp){
					SetCredentials(resp);
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
			$scope.dataLoading = false;
			$location.path('/user/home');

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
	
	$scope.setCurrTown = setCurrTown;
	$scope.resetCategoryAndTown = function(){
		$scope.currentCategory = undefined;
		$scope.currentCategoryName = "All";
		$scope.currentTown = undefined;
		$scope.currentTownName = "All";
	}

});

