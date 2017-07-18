(function(){
	'use strict'

	angular.module('BindingApp', [])
	.controller('BindingController', BindingController);

	BindingController.$inject = ['$scope', '$timeout']
	function BindingController($scope, $timeout ){
		$scope.firstName = "Asif";
		//$scope.fullName = "";

		$scope.showNumberOfWatchers = function(){
			console.log("# of wathcers: ", $scope.$$watchersCount);
		};

		$scope.setFullName = function(){
			$scope.fullName = $scope.firstName + " " + "Sultan"
		};

		$scope.logFirstName = function(){
			console.log("First name is: ", $scope.firstName );
		};

		$scope.logFullName = function(){
			console.log("First name is: ", $scope.fullName );
		};

	}
})();