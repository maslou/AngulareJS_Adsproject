softUni.controller('RegisterController', function($scope, mainData,  $location){
		$scope.register = function(){
			$scope.dataLoading = true;
			mainData.register(
				function(resp){
					console.log(resp);
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
			
			$scope.dataLoading = false;
			//$location.path('/ads');
		};
});