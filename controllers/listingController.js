angular
.module('craftyCart')
.controller('ListingController', function ($scope, CraftyCartService, $routeParams) {

  function loadSingleListing () {
    console.log($routeParams.listingId);
  }
  loadSingleListing();

  if ($routeParams.listingId) {
    CraftyCartService.getSingleListing($routeParams.listingId)
    .then(function (listing){
      console.log ("INFO", listing);
      window.glob = listing.data.results;
      $scope.singleListings = listing.data.results;
    });
  }

});
