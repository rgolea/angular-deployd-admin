deletedId = this.id;
dpd.members.get().then(function(members){
    members.forEach(function(member){
        member.categories.forEach(function(category){
            if(category.id == deletedId){
                cancel("In use", 500);
            }
        });
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
