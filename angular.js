<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grocery Shop</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="groceryApp" ng-controller="GroceryController">

  <div>
    <input type="text" ng-model="searchText" placeholder="Search for groceries...">
  </div>

  <ul>
    <li ng-repeat="item in groceryItems | filter:searchText">
      {{ item.name }} - ${{ item.price }}
    </li>
  </ul>

  <script>
    angular.module('groceryApp', [])
      .controller('GroceryController', function($scope) {
        $scope.groceryItems = [
          { name: 'Apples', price: 1.99 },
          { name: 'Bananas', price: 0.99 },
          { name: 'Carrots', price: 2.99 },
          { name: 'Dairy Milk', price: 3.49 },
          { name: 'Eggs', price: 2.49 }
        ];
      });
  </script>

</body>
</html>
