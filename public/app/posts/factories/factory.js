app.factory('Posts', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/posts/:id', {
        id: "@id"
    });
}]);

app.factory('Comments', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/comments/:id', {
        id: "@id"
    });
}]);