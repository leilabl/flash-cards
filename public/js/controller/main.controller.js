app.controller('MainController', function ($scope, $http, $q, FlashCardsFactory, ScoreFactory) {
	
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
	// console.log($scope.flashCards)

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct) ScoreFactory.correct ++;
			else ScoreFactory.incorrect ++;
		}
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

});

