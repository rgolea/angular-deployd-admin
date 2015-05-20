if(this.userId !== me.id && !me.posts){
    cancel("Unauthorized", 401);
}