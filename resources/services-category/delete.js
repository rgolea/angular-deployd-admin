deleteId = this.id;
dpd.services.get().then(function(services){
    services.forEach(function(service){
            if(service.category == deleteId){
                cancel("In use", 500);
            }
    });
});
