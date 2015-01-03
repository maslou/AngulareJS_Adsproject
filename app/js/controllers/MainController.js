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
		$scope.currentCategoryName = catName;
	}
	
	$scope.setCurrCategory = setCurrCategory;

	$scope.currentTown = undefined;

	function setCurrTown(town){
		$scope.currentTown=town;
	}
	
	$scope.setCurrTown = setCurrTown;

	$scope.resetCategoryAndTown = function(){
		$scope.currentCategory = undefined;
		$scope.currentCategoryName = "All";
		$scope.currentTown = undefined;
	}
});

