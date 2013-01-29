
var net = require('net');

// The following creates an empty array.
var sockets = []; 

var svr = net.Server(function(socket) {
    
    // on each connection, push the users socket into the array
    sockets.push(socket);
    
    socket.on('data', function(d) {
       
       // itterate over sockets and push messages out
       for (var i=0; i<sockets.length; i++) {
        
            // Skip echoing to self.
           if (sockets[i] == socket)
              continue;
              
           sockets[i].write(d);
           
       }// for i
    });

    // Need to clean up disconnected sockets to keep from erroring
    //   server when hitting a dead socket.
    // Note: there is also a termination event called 'close'.
    socket.on('end', function() {
       
       // funny way to remove an item from an array
       // delete a[x] also works.
       var i = sockets.indexOf(socket);
       sockets.splice(i, 1);
       
    });
    


});

svr.listen(process.env.PORT);
