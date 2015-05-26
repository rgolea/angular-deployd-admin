app.factory('Questions', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/questions/:id', {
        id: "@id"
    });
}]);