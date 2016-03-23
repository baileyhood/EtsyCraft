
angular
  .module('craftyCart')
  .service('CraftyCartService', function($http) {

    var key = 'xufzy71e3facv50bbjjxnzi7';

    var cors = 'https://free-cors-server.herokuapp.com/any-request/';

    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');

    function getActiveListings() {
     return $http.get(cors + url);
    }

    function getSingleListing(id) {
      return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
    }

   return {
     getActiveListings: getActiveListings,
     getSingleListing: getSingleListing
   };
  });
