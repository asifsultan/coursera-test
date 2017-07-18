(function(){
	angular.module('DIApp', [])
	.controller('DIController', DIController);
// Minifcation proctected name in array
// .controller('DIController', ['$scope', '$filter', DIController]);
    DIController.$inject =['$scope', '$filter'];

	function DIController(  $scope, 
							$filter ){
		$scope.name= "Asif Sultan"

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name= upCase($scope.name);
		};


	}
	

})();