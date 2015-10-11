'use strict';

angular.module('savvyAppApp')
  .controller('SidebarRightCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    /*
      controls the slider value output in right slidebar
    */
    $scope.discounts = [];

    $scope.compaignName = "Banana Republic";
    $scope.compaignBudget ="100";
      
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    // $scope.$watch('$parent.currentStep', function (value) {
    //   console.log(value);
    //   console.log($scope.$parent.currentStep);
    // });
  
    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.goToStep = function(step) {
      $scope.$parent.currentStep = step;
    };

    $scope.images = [
      {src : "http://i.imgur.com/r4NIu8S.png"},
      {src : "http://i.imgur.com/JFzncfu.png"},
      {src : "http://i.imgur.com/r4NIu8S.png"},
      {src : "http://i.imgur.com/7x2VdR6.png"},
      {src : "http://i.imgur.com/JP34QD7.png"},
      {src : "http://i.imgur.com/QLbLiRZ.png"},
      {src : "http://i.imgur.com/sAOMMer.png"},
      {src : "http://i.imgur.com/gjeOAfW.png"}
    ];
  })
  .directive('myCoverflow', function($timeout) {
    return {
      restrict : "C",
      link : function (scope, element) {
        $timeout(function(){
          element.coverflow(2);
        });
      }
    };
  });

