softUni.controller('RegisterController', function($scope, mainData,  $location){
		$scope.register = function(){
			$scope.error = undefined;
			$scope.dataLoading = true;
			mainData.register(
				function(resp){
					$scope.userData = resp;
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
		};
});