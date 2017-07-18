(function(){
    'use strict'
    angular.module('FilterApp', [])
    .controller('FilterController', FilterController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);
    FilterController.$inject = ['$scope' , 'lovesFilter'];

    function FilterController($scope, lovesFilter){
        $scope.name = "Asif Sultan";  
        $scope.state = 1;
        $scope.cost = 0.95;


        $scope.message =function(){
        var msg = "Asif no likes to eat anything at night!";
        
            return msg;
        };

        $scope.sayLovesMessage = function(){
            var msg = "Asif no likes to eat anything at night!"
            msg = lovesFilter(msg);
            return msg;
        }

        $scope.dontEat = function(){
            $scope.state = 2;
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



