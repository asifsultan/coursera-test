(function () {
	'user strict'

	angular.module('ShoppingListPrromiseApp', [])
	.controller('ShoppingListController', ShoppingListController) 
	.service('ShoppingListService', ShoppingListService)
	.service('WeightLossFilterService',WeightLossFilterService);


	ShoppingListController.$inject = ['ShoppingListService'];
	function ShoppingListController(ShoppingListService) {
		var list = this;


		list.items = ShoppingListService.getItems();

		list.name = "";
		list.quantity = "";

		list.addItem = function(){
			if(list.name != "" & list.quantity != "")
		    ShoppingListService.addItem(list.name, list.quantity);

		
		}

		list.removeItems = function(itemIndex){
			ShoppingListService.removeItems(itemIndex);
		}; 
	}

	ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
	function ShoppingListService($q, WeightLossFilterService){
		 var service = this;

		 var items = [];

		 service.addItem = function(name, quantity){
		 	var namePromise = WeightLossFilterService.checkName(name);
		 	var quantityPromise = WeightLossFilterService.checkQuantity(quantity);
		 	 
		 	 $q.all([namePromise, quantityPromise])
		 	 .then(function(response){
		 	 	item = {
		 	 		name: name,
		 	 		quantity: quantity
		 	 	}
		 	 	items.push(item);
		 	 })
		 	 .catch(function(errorResponse){
		 	 	console.log(errorResponse.message)
		 	 });
		 }


		 // service.addItem = function(name, quantity){
		 // 	var promise = WeightLossFilterService.checkName(name);

		 // 	promise
		 // 	.then(function(response){
		 // 		return WeightLossFilterService.checkQuantity(quantity);

		 // 	})
		 // 	.then(function(response) {
		 // 		// body...
		 // 		var item = {
		 // 			name: name,
		 // 			quantity: quantity
		 // 		}
		 // 		items.push(item)
		 // 	})
		 // 	.catch(function(errorResponse){
		 // 		console.log(errorResponse.message);
		 // 	});
		 // }


		// service.addItem = function (name, quantity) {
		//   var promise = WeightLossFilterService.checkName(name);
		
		//   promise.then(function (response) {
		//     var nextPromise = WeightLossFilterService.checkQuantity(quantity);
		
		//     nextPromise.then(function (result) {
		//       var item = {
		//         name: name,
		//         quantity: quantity
		//       };
		//       items.push(item);
		//     }, function (errorResponse) {
		//       console.log(errorResponse.message);
		//     });
		//   }, function (errorResponse) {
		//     console.log(errorResponse.message);
		//   });
		// };		

		 service.removeItems = function(itemIndex){
		 	items.splice(itemIndex, 1);
		 };
		  service.getItems = function(){
		 	return items;
		 };
	}	 

	WeightLossFilterService.$inject = ['$q', '$timeout']
	function WeightLossFilterService($q, $timeout){
		var service = this;

		service.checkName = function(name){
			var deffered = $q.defer();

			var result = {
				message: ""
			};

			$timeout(function() {

				if (name.toLowerCase().indexOf('cookie') === -1) {
					deffered.resolve(result);
				}else{
					result.message = "Stay away from cookies, bro!";
					deffered.reject(result);
				}

			},3000);	

		return deffered.promise;

		}

		service.checkQuantity = function(quantity){
			var deffered = $q.defer();

			var result = {
				message : ""
			};

		$timeout(function() {

			if (quantity < 6) {
				deffered.resolve(result);
				
			}else{
				result.message= "That's too much, bro!";
				deffered.reject(result);
			}
		},1000);	

		return deffered.promise;

		}
	
	}


})();


