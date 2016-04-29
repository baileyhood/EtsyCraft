angular
.module('craftyCart')
.controller('HomeController', function ($scope, $rootScope, CraftyCartService, CartService){

  function initialLoad () {
    CraftyCartService.getActiveListings()
    .then(function (data) {
        console.log(data);
        $scope.listings = data.data.results;
        window.glob = data;
  });
  }
  initialLoad();

  $rootScope.addToCart = function(item) {
    CartService.addToCart(item)
           .then(function(data) {
             console.log("added item info: ", data);
    });
  };

  $scope.showMe = function(){
    $scope.show=true;
  };

});
