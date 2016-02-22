app.directive('flashCard', function (FlashCardsFactory, ScoreFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/flashcards/flashcards.html',
		scope: {
			card: '='
		},
		link: function (scope) {
			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
					if (answer.correct) ScoreFactory.correct ++;
					else ScoreFactory.incorrect ++;
				}
			}
		}
	}
})