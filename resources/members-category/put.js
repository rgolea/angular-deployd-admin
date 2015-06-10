updateId = this.id;
dpd.members.get().then(function(members){
    members.forEach(function(member){
        member.categories.forEach(function(category){
            if(category.id == updateId){
                cancel("In use", 500);
            }
        });
    });
});