app.factory('Posts', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/posts', {
        id: "@id"
    });
}]);