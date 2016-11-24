(function(){
    'use strict'
    angular.module('CounterApp', [])
    .controller('CounterController', CounterController)
    // .filter('loves', LovesFilter)
    // .filter('truth', TruthFilter);
    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout){
        $scope.name= "Asif";
        $scope.onceCounter =0;
        $scope.counter =0;


        $scope.showNumberOfWatchers = function(){
            console.log("NumberOfWatchers: ",$scope.$$watchersCount);
        };

         $scope.countOnce = function(){
            $scope.onceCounter =1;
           

        };
         $scope.upCounter = function(){
           $timeout(function() {
                $scope.counter++;
                console.log("Counter Incremented"); 
           }, 2000);
        }

        // $scope.upCounter = function(){
        //     setTimeout(function(){
        //         $scope.$apply(function(){
        //         $scope.counter++;
        //         console.log("Counter Incremented");
        //     });
        //     }, 2000);
        // }

        // $scope.upCounter =function(){
        //     setTimeout(function(){
        //          $scope.counter++;
        //          console.log("Counter Incremented");
        //          $scope.$digest();

        //     }, 2000);
        //     //$scope.counter++;
        // }

        // $scope.$watch(function(){
        //     console.log("Digest loop fired!");
        // });
        // $scope.$watch('onceCounter', function(newValue, oldValue){
        //     console.log("old value: ", oldValue);
        //     console.log("new value: ", newValue);
        // });

        // $scope.$watch('counter', function(newValue, oldValue){
        //     console.log("Counter old value: ", oldValue);
        //     console.log("Counter new value: ", newValue);
        // });
    }

})();