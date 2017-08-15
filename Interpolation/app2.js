(function(){
'use strict'

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)

    MsgController.$inject= ['$scope', '$filter'];
    function MsgController($scope, $filter) {
        $scope.name = "Asif Sultan";
        $scope.state = "1";
        $scope.cookieCost = .45;
  

    $scope.sayMessage = function(){
        var msg= "I never though that this would happen";
        var output = $filter('uppercase')(msg);
        return output;
    }

    $scope.changeImage = function(){
        if ($scope.state === '1') {
            $scope.state ="2";
        }
        else{
            $scope.state ="1";
        }

    }
}


})();