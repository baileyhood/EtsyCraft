angular
.module('craftyCart')
.controller ('CartController', function ($scope, cartService) {

  $scope.addListingToCart = function (item){
      console.log(item);
    };
  }
);
