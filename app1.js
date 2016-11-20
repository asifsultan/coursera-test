(function(){
	angular.module('DIApp', [])
	.controller('DIController',['$scope', '$filter', '$injector',DIController] );

    DIController.$inject =[$];

	function DIController(  $scope, 
							$filter , 
							$injector){
		$scope.name= "Asif Sultan"

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name= upCase($scope.name);
		};
		console.log($injector.annotate(DIController));


	}
	function AnnonateMe(name, job, blah){
		return "Blah";
	}
	console.log(DIController.toString());

})();