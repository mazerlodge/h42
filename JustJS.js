function q() {
    console.log("hello world");
    
    var x = new Array(4,2);
    
    msg = "Hello ";
    for(var i=0; i<2; i++) 
        msg += x[i];
    
    show(msg);
    
}

function show(msg) {
    
    console.log(msg);
    
}

q();