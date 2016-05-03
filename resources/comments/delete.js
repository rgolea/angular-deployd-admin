if(this.userId !== me.id && !me.admin && !me.posts){
    cancel("Unauthorized", 401);
}
