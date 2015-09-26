app.controller('itemsController', ['$scope', '$resource', function ($scope, $resource) {
	var Item = $resource('/api/items:name');


	$scope.items = [
		{name: "Canon 50mm f/1.4"},
		{name: "Tamron 90mm f/2.1 Macro"},
		{name: "Canon 18-135mm f/2.4"}
	];

	$scope.createItem = function () {
		$scope.items.push({ name: $scope.itemName });
		$scope.itemName = '';
		var item = new Item();
		console.log($scope.items);
		item.name = $scope.itemName;
		item.$save();
	}
}]);
