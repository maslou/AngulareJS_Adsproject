softUni.controller('LoginController', function($scope, $rootScope, $cookieStore, mainData,  $location){
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



	function SetCredentials(uData){
		$rootScope.userData = uData;
		$cookieStore.put('userData', $rootScope.userData);

	};



});