app.factory('Services', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/services/:id', {
        id: "@id"
    });
}]);

app.factory('ServicesCategory', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/services-category/:id', {
        id: "@id"
    });
}]);
