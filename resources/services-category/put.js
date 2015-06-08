updateId = this.id;
dpd.services.get().then(function(services){
    services.forEach(function(service){
            if(service.category == updateId){
                cancel("In use", 500);
            }
    });
});