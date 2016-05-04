if(!me.admin && this.creator !== me.id) {
    cancel("Unauthorized", 401);
}

<<<<<<< HEAD
protect('creator');
=======
protect('creator');
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
