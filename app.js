var fs = require("fs");

console.log("single, main JS thread!");
console.log("we go one by one");
console.log("then another in a queue manner");
console.log("all functions and lines of code in a sync manner on the main thread");

console.log("now you hit a async function!");
console.log("it moves the operation on a new thread!!");
console.log("and when it is finished with it's job, the call back function from the async request is fired!");
console.log("now...");
console.log("i'm here to test if that function is added to the end of the queue/main thread or not!");
console.log();

fs.readFile("poem.txt", "utf8", function(err, data){
    //console.log("error: "+err);
    console.log("i'm the callback function 1 from the async readfile request (fn)");
    console.log("file read successfully...");
    console.log();
});
fs.readFile("poem.txt", "utf8", function(err, data){
    //console.log("error: "+err);
    console.log("i'm the callback function 2 from the async readfile request (fn)");
    console.log("file read successfully...");
    console.log();
});
fs.readFile("poem.txt", "utf8", function(err, data){
    //console.log("error: "+err);
    console.log("i'm the callback function 3");
    console.log("ill be executed the last! as JS main thread folows queue structure!");
    console.log("file read successfully...");
    console.log();
});

console.log("lines of code after the async request!");
console.log("these codes should all be executed first and then the callback function!");
console.log();

// for (let i = 0; ; i++) {
//     if(i==0){
//         console.log("starting an infinite loop!");
//         console.log("now, the main thread is endless...\nthe callback functions will never be fired, even if reading is completed!!");
//         console.log("because the main thread will never end...!!");
//     }
// }