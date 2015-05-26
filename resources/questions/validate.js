if(!me.admin && !me.polls){
    cancel("You are not authorized to do that", 401);
}