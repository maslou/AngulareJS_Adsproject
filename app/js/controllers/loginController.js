softUni.controller('LoginController', function($scope, mainData,  $location){
		$scope.login = function(){
			$scope.dataLoading = true;
			console.log($scope.username);
			console.log($scope.password);
			$location.path('/ads');
		};
});