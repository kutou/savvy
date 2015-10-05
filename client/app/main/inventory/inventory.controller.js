'use strict';

angular.module('savvyAppApp')
  .controller('InventoryCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.products = [
        { name: 'Blue Pants',
          no: 27381,
          price: 20,
          qty: 10,
          src: 'http://i.imgur.com/ooipbsq.png',
          added: false},
        { name: 'Grey Pants',
          no: 27382,
          price: 21,
          qty: 11,
          src: 'http://i.imgur.com/gjeOAfW.png',
          added: false},
        { name: 'Dark Pants',
          no: 27383,
          price: 22,
          qty: 12,
          src: 'http://i.imgur.com/JFzncfu.png',
          added: false},
        { name: 'Short Pants',
          no: 27384,
          price: 23,
          qty: 13,
          src: 'http://i.imgur.com/SOH1f4B.png',
          added: false},
        { name: 'Dark Short Pants',
          no: 27385,
          price: 24,
          qty: 14,
          src: 'http://i.imgur.com/mROfzaZ.png',
          added: false},
        { name: 'Light Short Pants',
          no: 27386,
          price: 25,
          qty: 15,
          src: 'http://i.imgur.com/zDETzjP.png',
          added: false},
        { name: 'Hoodie',
          no: 27387,
          price: 26,
          qty: 16,
          src: 'http://i.imgur.com/sAOMMer.png',
          added: false},
        { name: 'Long-Sleeve',
          no: 27388,
          price: 26,
          qty: 17,
          src: 'http://i.imgur.com/7x2VdR6.png',
          added: false},
        { name: 'Gray Sleeve',
          no: 27389,
          price: 27,
          qty: 18,
          src: 'http://i.imgur.com/Xynchm4.png',
          added: false},
        { name: 'Suit',
          no: 27380,
          price: 28,
          qty: 19,
          src: 'http://i.imgur.com/JP34QD7.png',
          added: false},
        { name: 'Light Suit',
          no: 27391,
          price: 29,
          qty: 20,
          src: 'http://i.imgur.com/r4NIu8S.png',
          added: false},
        { name: 'Gray Suit',
          no: 27392,
          price: 30,
          qty: 21,
          src: 'http://i.imgur.com/QLbLiRZ.png',
          added: false},
        { name: 'Jacket',
          no: 27394,
          price: 31,
          qty: 22,
          src: 'http://i.imgur.com/6RUVV3g.png',
          added: false},
        { name: 'Blue Tie',
          no: 27394,
          price: 31,
          qty: 23,
          src: 'http://i.imgur.com/glzvFAf.png',
          added: false},
        { name: 'Casual Suit',
          no: 27394,
          price: 32,
          qty: 24,
          src: 'http://i.imgur.com/QHFQ9i2.png',
          added: false},
        { name: 'Red Tie',
          no: 27395,
          price: 33,
          qty: 25,
          src: 'http://i.imgur.com/5PChWMP.png',
          added: false}
      ];
      
      $scope.currentPage = 0;
      $scope.tableItems = 20;
      $scope.lastPage = Math.ceil($scope.products.length / $scope.tableItems);
      $scope.tableView = $scope.products.slice($scope.currentPage * $scope.tableItems, ($scope.currentPage + 1) * $scope.tableItems);
      
      
      $('.placeholder').css('height', ($scope.tableItems - $scope.products.length % $scope.tableItems) * 51);
      
      $scope.nextPage = function () {
          if ($scope.currentPage < $scope.lastPage - 1) {
              $scope.currentPage += 1;
              $scope.tableView = $scope.products.slice($scope.currentPage * $scope.tableItems, ($scope.currentPage + 1) * $scope.tableItems);
          }
      };
      
      $scope.previousPage = function () {
          if ($scope.currentPage > 0) {
              $scope.currentPage -= 1;
              $scope.tableView = $scope.products.slice($scope.currentPage * $scope.tableItems, ($scope.currentPage + 1) * $scope.tableItems);
          }
      };
      
      $scope.getTimes = function (n) {
          return new Array(n);
      };
  });
