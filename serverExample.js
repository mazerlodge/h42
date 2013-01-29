
// Example of a web server written using Node.js

// Use link from Output window to access the server.
// s/b something like: 'http://h42.mazerlodge.cloud9ide.com'.

function serverAction(req, resp) {

    resp.writeHead(200, {'content-type' : 'text/plain'});

    resp.end("Hello world\n");

}


var http = require('http');

var svr = http.createServer(serverAction);

// Note: on a stand alone node.js implementation, 
//   this would be an actual port number, like 8000.
svr.listen(process.env.C9_PORT);
