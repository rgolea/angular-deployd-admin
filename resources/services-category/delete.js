deleteId = this.id;
dpd.services.get().then(function(services){
    services.forEach(function(service){
            if(service.category == deleteId){
                cancel("In use", 500);
            }
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
