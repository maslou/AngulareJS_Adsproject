softUni.controller('RegisterController', function($scope, mainData,  $location){
		$scope.register = function(){
			$scope.dataLoading = true;
			
			console.log($scope.username);
			console.log($scope.password);
			console.log($scope.confirmPassword);
			console.log($scope.name);
			console.log($scope.email);
			console.log($scope.phone);
			console.log($scope.town);
			

			$scope.dataLoading = false;
			//$location.path('/ads');
		};
});