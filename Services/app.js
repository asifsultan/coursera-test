(function () {
	'user strict'

	angular.module('ControllerAsApp', [])
	.controller('ShoppingListAddController', ShoppingListAddController) 
	.controller('ShoppingListShowController', ShoppingListShowController)
	.service('ShoppingListService', ShoppingListService);

	ShoppingListAddController.$inject = ['ShoppingListService'];
	function ShoppingListAddController(ShoppingListService) {
		var itemAdder = this;

		itemAdder.itemName = "";
		itemAdder.itemQuantity = "";

		itemAdder.addItem = function(){
			ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
		}
	}

	ShoppingListShowController.$inject = ['ShoppingListService'];
	function ShoppingListShowController(ShoppingListService) {
		var showList = this;

		showList.items = ShoppingListService.getItems();

		showList.removeItems = function(itemIndex){
			ShoppingListService.removeItems(itemIndex);
		}; 
	}

	function ShoppingListService(){
		 var service = this;

		 var items = [];

		 service.addItem = function(itemName, quantity){
		 	var item = {
		 		name: itemName,
		 		quantity: quantity
		 	};
		 	items.push(item);
		 };

		 service.getItems = function(){
		 	return items;
		 };

		 service.removeItems = function(itemIndex){
		 	items.splice(itemIndex, 1);
		 };
	}



})();


