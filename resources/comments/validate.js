if(!me){
    cancel("Unauthorized", 401);
}

if(!me.admin && !me.posts){
    delete this.allow;
}
