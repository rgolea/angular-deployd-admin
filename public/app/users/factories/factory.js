app.factory('Users', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {
    return $resource(BASE_URL + '/users/:id', {
        id: "@id"
    }, {
        login: {
            method: 'POST',
            url: BASE_URL + '/users/login'
        },
        logout: {
            method: 'GET',
            url: BASE_URL + '/users/logout'
        },
        me: {
            method: 'GET',
            url: BASE_URL + '/users/me'
        }
    });
}]);