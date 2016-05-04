if(me.admin || this.creator !== me.id) {
    var deletedId = this.id;
    dpd.comments.get().then(function(comments){
        comments.forEach(function(comment){
            if(comment.postId == deletedId){
                dpd.comments.del({id: comment.id});
            }
        });
    });
} else {
    cancel("Unauthorized", 401);
<<<<<<< HEAD
}
=======
}
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
