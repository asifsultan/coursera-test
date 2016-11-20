(function(){
'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject =['$scope']
    function MsgController ($scope){
        $scope.name="Asif Sultan";
        $scope.state ="1";


        $scope.sayMessage = function(){
            return "I always want to be alone!"
        }
        $scope.changeImage = function(){
            $scope.state="2";   
        }
    }
})();