// require deployd
var deployd = require('deployd');
<<<<<<< HEAD

// configure database etc.
=======
 
// configure database etc. 
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
var server = deployd({
  port: process.env.PORT || 2403,
  env: process.env.ENV || 'development',
  db: {
<<<<<<< HEAD
    connectionString: 'mongodb://localhost:27017/dpdinterface'
  }
});

// start the server
server.listen();

=======
    connectionString: 'mongodb://localhost:27017/interface'
  }
});
 
// start the server
server.listen();
 
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
// debug
server.on('listening', function() {
  console.log("Server is listening on port: " + (process.env.PORT || 2403));
});
<<<<<<< HEAD

=======
 
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
// Deployd requires this
server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 6e4411260f151d7963affd882deca61537a10fa7
