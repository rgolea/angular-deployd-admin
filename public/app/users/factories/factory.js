app.factory('Users', ['$resource', 'SERVER_URL', function ($resource, SERVER_URL) {
    return $resource(SERVER_URL + '/users/:id', {
        id: "@id"
    }, {
        login: {
            method: 'POST',
            url: SERVER_URL + '/users/login'
        },
        logout: {
            method: 'GET',
            url: SERVER_URL + '/users/logout'
        },
        me: {
            method: 'GET',
            url: SERVER_URL + '/users/me'
        }
    });
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
