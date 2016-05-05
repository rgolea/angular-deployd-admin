app.factory('Content', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/content/:id', {
        id: "@id"
    });
}]);
