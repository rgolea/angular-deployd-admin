app.factory('Photos', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/photos/:id', {
        id: "@id"
    });
}]);
