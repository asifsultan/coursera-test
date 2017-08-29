(function () {
	'user strict'

	angular.module('DirectivesApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.controller('ShoppingListController2', ShoppingListController2)
	.factory('ShoppingListFactory', ShoppingListFactory)
  .directive('shoppingList', ShoppingList);
  // .directive("listItem", listItem);


  function ShoppingList(){
    var ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        list: '=myList',
        title: '@title'
      }
    };
    return ddo;
  }

  // function listItem(){
  //   var ddo = {
	// 		restrict: "AE",
  //     templateUrl: 'listItem.html '
  //   };
  //   return ddo;
  // }

	ShoppingListController1.$inject = ['ShoppingListFactory'];

	//** List #1 - controller
	function ShoppingListController1(ShoppingListFactory) {
		var list = this;

		var shoppingList = ShoppingListFactory();

		list.items = shoppingList.getItems();
    var origTitle = "Shopping List #1";
    list.title = origTitle + "(" + list.items.length + " items )";


		list.itemName = "";
		list.itemQuantity = "";

		list.addItem = function(){
			shoppingList.addItem(list.itemName, list.itemQuantity);
        list.title = origTitle + "(" + list.items.length + " items )";
		};
		list.removeItems = function(itemIndex){
			shoppingList.removeItems(itemIndex);
        list.title = origTitle + "(" + list.items.length + " items )";
		};
	}

//**	List #2 - controller	**//


	ShoppingListController2.$inject = ['ShoppingListFactory'];
	function ShoppingListController2(ShoppingListFactory) {
		var list = this;

		// Use factory to create new shopping list service
		var shoppingList = ShoppingListFactory(3);

		list.items = shoppingList.getItems();

		list.itemName = "";
		list.itemQuantity = "";

		list.addItem = function () {
		  try {
		    shoppingList.addItem(list.itemName, list.itemQuantity);
		  } catch (error) {
		    list.errorMessage = error.message;
		  }

		}

		list.removeItem = function (itemIndex) {
		  shoppingList.removeItem(itemIndex);
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

	function ShoppingListFactory(){

		var factory = function(maxItems){
			return new ShoppingListService(maxItems);
		}
		return factory;
	}


})();
