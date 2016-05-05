app.factory('Settings', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/settings/:id', {
        id: "@id"
    });
}]);