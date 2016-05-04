if(!me){
    cancel("Unauthorized", 401);
}

if(!me.admin && !me.posts){
    delete this.allow;
<<<<<<< HEAD
}
=======
}
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
