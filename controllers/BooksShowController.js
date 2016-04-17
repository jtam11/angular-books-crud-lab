angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this,
      endpoint = 'https://super-crud.herokuapp.com/books';

  $http({
    method: 'GET',
    url: endpoint + "/" + $routeParams.id
  }).then(successShowCallback);

  vm.deleteBook = function (book){
    $http({
      method: 'DELETE',
      url: endpoint + "/" + book._id
    }).then(successDeleteCallback);
  };

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: endpoint + "/" + book._id,
      data: book
    }).then(successEditCallback);
  };


  //success callback functions starts here
  function successShowCallback(response) {
    vm.book = response.data;
  }

  function successDeleteCallback(response) {
    $location.path('/');
  }

  function successEditCallback(response) {
    $location.path('/');
  }
}
