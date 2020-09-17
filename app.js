(function(){
'use strict'; //to make sure we don't make any careless mistakes if made we can see error in log

  angular.module("myFirstApp", [])

  .controller("myFirstController",function($scope){//any var with $ says its reserved for angularJs
    $scope.name="Kiran"; //Now name is available in the scope variable inside the myFirstController in index.html
    $scope.sayHello=function(){
      return "Hello World";
    };
  })
})();
