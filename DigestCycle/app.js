(function(){
	'use strict'
	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];
	function CounterController($scope){
		$scope.onceCounter = 0;
		$scope.counter =0;
		$scope.showNumberOfWatchers = function(){
			console.log("number of watchers: ", $scope.$$watchersCount); 
		};
		$scope.countOnce = function(){
			$scope.onceCounter = 1;
		};
		$scope.upCounter =function(){
			$scope.counter++;
		};
		$scope.$watch(function(){
			console.log("Digest loop Fired!");
		});

		// $scope.$watch('onceCounter', function(newValue, oldValue){
		// 	console.log("onceCounter Old Value: ", oldValue);
		// 	console.log("onceCounter New Value: ", newValue);
		// });
		// $scope.$watch('counter', function(newValue, oldValue){
		// 	console.log("counter Old Value: ", oldValue);
		// 	console.log("counter New Value: ", newValue);
		// });
	}
})();