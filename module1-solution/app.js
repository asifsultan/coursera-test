(function(){
'use-strict'
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchItem= "";
        var total = 0;
        $scope.splitString =function(){
            var comma =',';
            var space = ' '; 
            var splittedString;
            var myString = $scope.lunchItem;
            if(myString != "")
            splittedString= myString.split(comma);
          
            if(splittedString > "")
            total=splittedString.length;
            return total;
        }


////////Case for handling space is not included///////
          $scope.displayMessage = function(){
            if(total > 3){
                return "Too much!";
            }
            else if(total > 0 && total <= 3){
                return "Enjoy!";
            }
            else{
                return "Please enter data first!";
            }
        }
    
    }
})();