if(query.includeComments || query.includeAll){
    dpd.comments.get({postId: this.id}, function(comments){
        this.comments = comments;
    });
}

if(query.includeAuthor || query.includeAll){
    dpd.users.get({id: this.creator}, function(data){
        this.user = data;
    });
}