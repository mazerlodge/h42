// Simple demo, timeout method takes a callback as a parameter.

function q() {
    console.log("world");
}

setTimeout(q,
2000);

console.log("hello");
