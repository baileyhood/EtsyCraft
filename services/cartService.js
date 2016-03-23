angular
.module('craftyCart')
.service('CartService', function ($http, $location){
  var cartUrl = 'http://tiny-tiny.herokuapp.com/collections/EtsyCrafty';

  function getCart (){
    return $http.get(cartUrl);
  }
  function addToCart (item) {
    return $http.post(cartUrl, item);
  }
  function removeFromCart () {
    return $http.delete(cartUrl);
  }

  return {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart
  };
});
