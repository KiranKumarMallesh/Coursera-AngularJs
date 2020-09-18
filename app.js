(function(){
'use strict'; //to make sure we don't make any careless mistakes if made we can see error in log

  angular.module("myFirstApp", [])

  .controller("myFirstController",function($scope){//any var with $ says its reserved for angularJs
    $scope.list="";
    $scope.result="";
    $scope.check=function(){
      var a=$scope.list;
      var b=a.split(",");
      if (a==""||a==" " ) {
        $scope.result="Please enter data first";
        
      }
      else if (b.length<=3) {
        $scope.result="Enjoy!";
      }
      else {
        $scope.result="Too much!";
      }
    };
  })
})();
