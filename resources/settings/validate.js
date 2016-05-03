if(!me.admin){
    cancel("Unauthorized", 401);
}
if(this.description.length>160){
    cancel("Description has more than 160 characters");
}
