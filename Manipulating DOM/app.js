(function () {
	'user strict'

	angular.module('DirectivesControllerApiApp', [])
	.controller('ShoppingListController', ShoppingListController)
	.factory('ShoppingListFactory', ShoppingListFactory)
  .directive("shoppingList", ShoppingListDirectives)



  function ShoppingListDirectives(){
    var ddo = {
      templateUrl: 'shoppingList.html',
			scope: {
				items: '<',
				myTitle: '@title',
				onRemove: '&'
			},
			controller: ShoppingListDirectiveController,
			controllerAs: 'list',
			bindToController: true,
			link: ShoppingListDirectiveLink
    };
    return ddo;
  }

	function ShoppingListDirectiveLink(scope, element, attrs, controller) {
		console.log("Link scope is: ", scope);
		console.log("Controller instrance is:", controller);
		console.log("Element is: ", element);

		scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
				console.log("Old Value: ", oldValue);
				console.log("New Value: ", newValue);

				if(newValue === true){
					displayCookieWarning();
				}
				else{
					removeCookieWarning();
				}
			});

			function displayCookieWarning() {
				//Using angular JqLite
				// var warningElem = element.find("div");
				// console.log("Warning element: ",warningElem);
				// warningElem.css('display', 'block');
				var warningElem = element.find("div.error");
				warningElem.slideDown(900);
			}

			function removeCookieWarning() {
				//Using angular JqLite
				// var warningElem = element.find("div");
				// warningElem.css('display', 'none');
				var warningElem = element.find("div.error");
				warningElem.slideUp(900);
			}
	}



	function ShoppingListDirectiveController() {
		var list = this;

		list.cookiesInList = function(){
			 for (var i = 0; i < list.items.length; i++) {
			 		var name = list.items[i].name;
					if(name.toLowerCase().indexOf("cookie") !== -1){
						return true;
					}
				}
					return false;
		};


	}

	ShoppingListController.$inject = ['ShoppingListFactory'];

	//** List #1 - controller
	function ShoppingListController(ShoppingListFactory) {
		var list = this;

		var shoppingList = ShoppingListFactory();

		list.items = shoppingList.getItems();
		var origTitle = "Shopping List #1";
		list.title = origTitle + " (" + list.items.length + " items )";

		list.itemName = "";
		list.itemQuantity = "";

		list.addItem = function(){
			shoppingList.addItem(list.itemName, list.itemQuantity);
		list.title = origTitle + " (" + list.items.length + " items )";
		};
		list.removeItems = function(itemIndex){
			console.log("'this' is", this);
			this.lastRemoved = "Last Item Removed was " + this.items[itemIndex].name;
			shoppingList.removeItems(itemIndex);
			list.title = origTitle + " (" + list.items.length + " items )";
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
