(function (){
	'use strict'
	angular.module('FilterApp', [])
	.controller('FilterController', FilterController)
	.filter('loves', LovesFilter)
	.filter('truth', TruthFilter);
	FilterController.$inject = ['$scope', 'lovesFilter'];

	function FilterController($scope, lovesFilter){
		$scope.name ="Asif Sultan";
		$scope.stateOfbeing = "1";
		$scope.cost = 0.95;

		$scope.sayMessage = function(){
			var msg = "Asif likes to eat healthy snakes at night!";
			return msg;
		};

		$scope.sayLovesMessage = function(){
			var msg = "Asif likes to eat healthy snacks at night!";
			msg = lovesFilter(msg);
			return msg;
		};
		$scope.feedAsif = function(){
			$scope.stateOfbeing = "2";
		};
	}

	function LovesFilter(){
		return function(input){
			input = input || "";
			input = input.replace("likes", "loves");
			return input;
		};
	}
	function TruthFilter(){
		return function(input, target, replace){
			input = input || "";
			input = input.replace(target, replace);
			return input;
		};
	}
})();