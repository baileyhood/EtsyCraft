angular
  .module ('craftyCart', ['ngRoute'])
  .config (function ($routeProvider){ //configuring route
    $routeProvider
      .when ('/', {
        templateUrl: 'templates/index.html',
        controller: 'HomeController'
      })
      .when ('/listings/:listingId', {
        templateUrl: 'templates/product-detail.html',
        controller: 'ListingController'
      });
  });
