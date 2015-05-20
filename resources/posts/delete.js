if(!me.admin && this.creator !== me.id) {
    cancel("Unauthorized", 401);
} else {
    var deletedId = this.id;
    dpd.comments.get(function(comments){
        comments.forEach(function(comment){
            if(comment.postId == deletedId){
                dpd.comments.del({id: comment.id});
            }
        });
    });
}