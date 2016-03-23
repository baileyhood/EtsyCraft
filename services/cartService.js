angular
.module('craftyCart')
.service('CartService', function ($http, $location){
  var cartUrl = 'http://tiny-tiny.herokuapp.com/collections/EtsyCrafts';

  function getCart (){
    return $http.get(cartUrl);
  }
  function addToCart (item) {
    return $http.post(cartUrl, item);
  }
  function removeFromCart (id) {
    return $http.delete(cartUrl + '/' + id);
  }

  return {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart
  };
});
