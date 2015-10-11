'use strict';

angular.module("savvyAppApp.directives.mySlider", [])
  .directive('mySlider', function($timeout){
    return {
      restrict : "E",
      scope : {
        min : "=",
        max : "=",
        myModel : "="
      },
      transclude : true,
      template: "<div><input hidden ng-model='myModel'></div>",
      replace : true,
      link : function (scope, ele, attrs, ctrl) {
        var hanzi = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];
        ele.slider({ 
            min: scope.min, 
            max: scope.max, 
            range: true, 
            values : [2, 8],
            slide : function (event, ui){
              scope.$apply(function(){
                ctrl = ui.values; // ctrl is model discounts
                console.log(ctrl);
              });
            }
        }).slider("float", {
            labels: hanzi
        })
        .slider("pips", {
            rest: false
        });
      }
    };
  });