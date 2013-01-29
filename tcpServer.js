
// Example of a tcp socket server
// This doesn't work in cloud9.

var net = require('net');

var svr = net.createServer(function(socket) {
    socket.write("Hello\n");
    socket.end("World.\n");
    
    // The following is an optional addition,
    //  it creates an echo server.
    // To use this change the above to socket.write
    //   instead of socket.end().
    socket.on('data', function(data) {
        socket.write(data);
    });
    
});

svr.listen(process.env.PORT);
