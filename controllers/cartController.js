angular
.module('craftyCart')
.controller ('CartController', function ($scope, CartService) {

  CartService.getCart()
  .then(function(data) {
    $scope.cartItems = data.data;
  });

$scope.deleteItem = function (obj) {
  CartService.removeFromCart(obj._id)
  .then(function(data) {
    console.log(data.data._id);
    var objId = data.data._id;
    var objPlace = $scope.cartItems.findIndex(function(el){
      return el._id === objId;
    });
    window.glob = objPlace;
    $scope.cartItems.splice(objPlace, 1);
  });
};
  }
);
