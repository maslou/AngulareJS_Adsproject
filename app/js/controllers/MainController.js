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

	$scope.currentCategory = null;

	function setCurrCategory(cat){
		$scope.currentCategory=cat;
	}
	
	$scope.setCurrCategory = setCurrCategory;
});

