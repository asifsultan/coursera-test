(function () {
	'user strict'

	angular.module('ShoppingListProvider', [])
	.controller('ShoppingListController', ShoppingListController) 
	.provider('ShoppingListService', ShoppingListServiceProvider)
	.config(Config);

	Config.$inject = ['ShoppingListServiceProvider'];
	function Config(ShoppingListServiceProvider){
		ShoppingListServiceProvider.defaults.maxItems = 2;
	}

	ShoppingListController.$inject = ['ShoppingListService'];
	function ShoppingListController(ShoppingListService) {
		var list = this;


		list.items = ShoppingListService.getItems();

		list.itemName = "";
		list.itemQuantity = "";

		list.addItem = function(){
		try {
			if(list.itemName != "" & list.itemQuantity != "")
		    ShoppingListService.addItem(list.itemName, list.itemQuantity);

		 } catch (error) {
		    list.errorMessage = error.message;
		 };
		}

		list.removeItems = function(itemIndex){
			ShoppingListService.removeItems(itemIndex);
		}; 
	}

// If not specified, maxItems assumed unlimited //
	function ShoppingListService(maxItems){
		 var service = this;

		 var items = [];

		 service.addItem = function(itemName, quantity){
		 	if ((maxItems === undefined) 
		 		|| (maxItems !== undefined) && (items.length < maxItems)){
				 	var item = {
				 		name: itemName,
				 		quantity: quantity
				 	};

				 	items.push(item);
				 
			}
			else{
				throw new Error("Max Items (" + maxItems + ") reached");
			}

		}	

		 service.getItems = function(){
		 	return items;
		 };

		 service.removeItems = function(itemIndex){
		 	items.splice(itemIndex, 1);
		 };
	}

	function ShoppingListServiceProvider(){
		var provider = this;

		provider.defaults = {
			maxItems : 10
		}
		provider.$get = function(){

			var shoppingList = new ShoppingListService(provider.defaults.maxItems);

			return shoppingList;
		};

	}


})();


