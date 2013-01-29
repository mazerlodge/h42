// Debugging example
// This is not allowed on Cloud9
// through node, launch w/ 
// $>node debug debugExample.js
//
// Then get a debug prompt, and type run
// debugger> run
// 
// Can also do list, backtrace
//
// The debugger interface isn't fully baked.

function q() {
    console.log("world");
}

setTimeout(q,
2000);

console.log("hello");

function foo() {
    debugger;
    return 1+2;
}

// call the function...
foo();
