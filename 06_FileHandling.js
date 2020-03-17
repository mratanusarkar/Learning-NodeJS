var fs = require('fs');

// synchronized read...
var poem = fs.readFileSync("poem.txt", "utf8");
console.log(poem);
console.log();

// synchronized write...
fs.writeFileSync("writeMe.txt", "Hello World");

// un-synchronized read & write...
file = "poem.txt";
encoding = "utf8";
file_data = "";
console.log("reading "+file+"...");
fs.readFile(file, encoding, function(err, data){
    console.log("error: "+err);
    console.log("file read successfully...");
    console.log();
    file_data = data;
    write();
});

function write(){
    // var data = "copied from "+file+"\n\n\n"+file_data;

    // console.log("writing to file....");
    // fs.writeFile("readMe.txt", data, function(err){
    //     console.log("error: "+err);
    //     console.log("file written successfully...");
    // });
    
}

console.log("writing to file at the end of the code....");
var str = "this should not write any file_data! as this code segment will run way before reading would be completed!"
fs.writeFile("readMe.txt", str+file_data, function(err){
    console.log("error: "+err);
    console.log("file written successfully...");
});