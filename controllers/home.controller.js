angular
.module('craftyCart')
.controller('HomeController', function ($scope, CraftyCartService){

  function initialLoad () {
    CraftyCartService.getActiveListings()
    .then(function (data) {
        console.log(data);
        $scope.listings = data.data.results;
        window.glob = data;
  });
  }
  initialLoad();
});
