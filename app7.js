var numberArray =[1,2,3,4,5,6,7,8,9, 10];
console.log("Numbers in array:" , numberArray);

function above5filter(value){
    return value >5;
}

var FilteredNumberArray = numberArray.filter(above5filter);
console.log("Filtered Number Array:", FilteredNumberArray);

//var shoppingList =[ "Milk", "Donuts", "Chocolates", "Peanut Butter", "Pepto Bismol", "Hecto Bismol", "Bounty", "Snickers","Mars"];
var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List:", shoppingList);

var seachVal ="Bismol";

function containsFilter(value){
    return value.indexOf(seachVal) != -1;
};

var indexVal= shoppingList.filter(containsFilter);
console.log("Searched value items", indexVal );

(function(){
    'use strict'
    angular.module('RepeatApp', [])
    .controller('RepeatController', RepeatController);

    RepeatController.$inject =['$scope'];
    function RepeatController($scope){
        $scope.shoppingList1 = shoppingList;


    }

})();