dpd.users.get({id: this.userId}, function(user){
    delete user.admin;
    delete user.main;
    delete user.polls;
    delete user.posts;
    this.user = user;
<<<<<<< HEAD
});
=======
});
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
