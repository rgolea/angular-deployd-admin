app.factory('Themes', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/themes/:id', {
        id: "@id"
    });
}]);