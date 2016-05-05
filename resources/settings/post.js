if(this.active){
    var id = this.id;
dpd.settings.get().then(function(settings){
    settings.forEach(function(setting){
        if(setting.active && setting.id !== id){
            cancel();
        }
    });
});
}