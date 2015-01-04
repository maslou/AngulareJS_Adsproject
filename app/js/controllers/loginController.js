softUni.controller('LoginController', function($scope, mainData,  $location){
		$scope.login = function(){
			$scope.dataLoading = true;
			
			mainData.login(
				function(resp){
					console.log(resp);
				},
				$scope.username,
				$scope.password,
				function(errormsg){
					$scope.error=errormsg;
				})

			$scope.dataLoading = false;
			//$location.path('/ads');
		};
});