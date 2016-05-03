if(!me.admin && this.creator !== me.id) {
    cancel("Unauthorized", 401);
}

protect('creator');
