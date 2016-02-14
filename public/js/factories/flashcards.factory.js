app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            var query = {};
            if(category) {
                query.category = category;
            }
            return $http.get('/cards', {params: query})
            .then(function (response) {
                return response.data;
            })
        }
    };
});