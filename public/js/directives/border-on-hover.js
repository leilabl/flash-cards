app.directive('borderOnHover', function () {
	return {
		restrict: 'A',
		link: function (scope, element) {
			element.on('mouseover', function () {
			    element.css('border', 'black solid 2px');
			});
		}
	}
})