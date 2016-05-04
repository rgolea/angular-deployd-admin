this.created = Date.now();
this.creator = me.id;

if(this.about){
    var id = this.id;
dpd.content.get().then(function(contents){
    contents.forEach(function(content){
        if(content.about && content.id !== id){
            cancel();
        }
    });
});
<<<<<<< HEAD
}
=======
}
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
