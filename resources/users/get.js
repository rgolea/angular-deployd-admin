if(!me){
    cancel("Unauthorized", 401);
}

if(!me.admin && me.id !== this.id){
    cancel("Unauthorized", 401);
}