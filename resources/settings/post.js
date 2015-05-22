if(this.active){
dpd.settings.get().then(function(settings){
    settings.forEach(function(setting){
        if(setting.active && setting.id !==this.id){
            cancel();
        }
    });
});
}