angular.module('app', [])
  .controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [
      { title: 'Learn Javascript', completed: true },
      { title: 'Learn Angular.js', completed: false },
      { title: 'Love this tutorial', completed: true },
      { title: 'Learn Javascript design patterns', completed: false },
      { title: 'Build Node.js backend', completed: false },
    ];
    $scope.title = "";
    $scope.handleClick = todo => {console.log(todo);};
    $scope.handleAddTodo = () => {$scope.todos.push({ title: $scope.title, completed: false })};
  }]);