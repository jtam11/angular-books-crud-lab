angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this,
      endpoint = 'https://super-crud.herokuapp.com/books';
  vm.newBook = {};

  $http({
    method: 'GET',
    url: endpoint
  }).then(successCallback);


  //success callback functions start here
  function successCallback(response) {
    console.log(response);
    vm.books = response.data.books;
  }

}
