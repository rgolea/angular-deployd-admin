dpd.users.get({id: this.userId}, function(user){
    delete user.admin;
    delete user.main;
    delete user.polls;
    delete user.posts;
    this.user = user;
});