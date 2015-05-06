// require deployd
var deployd = require('deployd');
 
// configure database etc. 
var server = deployd({
  port: process.env.PORT || 2403,
  env: 'development',
  db: {
    connectionString: 'mongodb://localhost:27017/interface'
  }
});
 
// start the server
server.listen();
 
// debug
server.on('listening', function() {
  console.log("Server is listening on port: " + (process.env.PORT || 2403));
});
 
// Deployd requires this
server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});