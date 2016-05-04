if(this.active){
    var id = this.id;
dpd.settings.get().then(function(settings){
    settings.forEach(function(setting){
        if(setting.active && setting.id !== id){
            cancel();
        }
    });
});
<<<<<<< HEAD
}
=======
}
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
