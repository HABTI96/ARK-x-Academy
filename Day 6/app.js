// let stuff = require("./Module.js")
// stuff.add(5,4)
// stuff.sub(6,2)

var currentDate = new Date();

// Get the timestamp in milliseconds
var timestampMilliseconds = currentDate.getTime();

// Convert milliseconds to seconds
var timestampSeconds = Math.floor(timestampMilliseconds / 1000);

console.log("Seconds since 1970:", timestampSeconds);