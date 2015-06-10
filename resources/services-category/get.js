if(query.includeServices){
    dpd.services.get({category: this.id}).then(function(services){
        this.services = services;
    });
}