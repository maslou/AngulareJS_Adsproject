softUni.controller('SoftUniController', function($scope, mainData){
	
	mainData.getAllAds(function(resp){
		$scope.data=resp;
	});

	mainData.getAllTowns(function(resp){
		$scope.towns=resp;
	});

	mainData.getAllCategories(function(resp){
		$scope.categories=resp;
	});











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

