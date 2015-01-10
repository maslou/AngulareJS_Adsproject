softUni.controller('UserProfile', 
	function($scope, $rootScope, $cookieStore, mainData,  $location){

		mainData.getUserProf(function(resp){
			var indxTown = mainData.arrObjIndexOf($scope.towns, 
					{id: resp.townId, name: ""});
			if(indxTown){
				$scope.userTown = $scope.towns[indxTown];
			}
			else{
				$scope.userTown = {};
			};
			$scope.userTown = $scope.towns[indxTown];
			$scope.name = resp.name;
			$scope.email = resp.email;
			$scope.phone = resp.phoneNumber;
		
		});

		$scope.ubdateProfile = function(){
			mainData.updateUserProf(
				function(resp){$scope.showsuccess = true;},
				function(error){$scope.error = error},
				{
					name: $scope.name,
					email: $scope.email ,
					phonenumber: $scope.phone,
					townid: $scope.userTown.id
				})
		};

		$scope.editPass = function(){
			$scope.showsuccessPass = false;
			$scope.errorPass = undefined;
			mainData.chgUserPass(
				function(resp){$scope.showsuccessPass = true;},
				function(error){$scope.errorPass = error},
				{
					oldPassword: $scope.oldPassword,
					newPassword: $scope.newPassword ,
					confirmPassword: $scope.confNewPassword
				})
		};

});