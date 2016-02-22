app.controller('MainController', function ($scope, $rootScope, $http, FlashCardsFactory, ScoreFactory) {
	
	FlashCardsFactory.getFlashCards()
	.then(function (cards) {
		$scope.flashCards = cards;
	});

	$scope.getCategoryCards = function (category) {
		$scope.activeCat = category;
		FlashCardsFactory.getFlashCards(category)
		.then(function (cards) {
			$scope.flashCards = cards;
		});
	}

	$rootScope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

});

