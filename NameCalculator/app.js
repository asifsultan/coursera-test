(function(){

  angular.module('NameCalculator', [])
        .controller("NameCalculatorController", function($scope){
          $scope.name ="";
          $scope.totalNumericValue =0;

          $scope.displayNumeric =function(){
            var totalNameValue = calculatNumericForString($scope.name);
            $scope.totalNumericValue = totalNameValue;
          }
          function calculatNumericForString(str){
            var totalValue = 0;
            for(var i=0; i < str.length; i++){
                totalValue += str.charCodeAt(i);
            }
            return totalValue;
          }
          
        });


} )();