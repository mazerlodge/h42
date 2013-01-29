// Simple demo, timeout method takes a callback as a parameter.

// Interweave two requirements w/ different intervals.
// See joyent


setInterval(function() {
    console.log("world");
    
},5000);


console.log("hello");

// every two seconds output headers from google.
var http = require('http');
setInterval(function() {
    console.log("fetching google...");
    
    http.get({host : 'www.google.com'}, function(res) {
        console.log(res.headers);
    });
    
}, 2000);


// Could even add a web server here.


