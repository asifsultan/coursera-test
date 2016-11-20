(function(){
'use-strict'
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchItem ="";
        var total = 0;
        $scope.splitString =function(){
            var comma =',';
            var space = ' '; 
            var splittedString;
            var myString = $scope.lunchItem;
            splittedString= myString.split(comma);
            console.log(splittedString);

            total=splittedString.length;
            console.log(total);
            return total;
        }
          $scope.displayMessage = function(){
            if(total > 3){
                return "Too much!";
            }
            else if(total > 0 && total <= 3){
                return "Enjoy!";
            }
            else{
                return "Empty";
            }
        }
    
    }
})();