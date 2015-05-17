if(this.userId !== me.id && !me.admin){
    cancel("Unauthorized", 401);
}