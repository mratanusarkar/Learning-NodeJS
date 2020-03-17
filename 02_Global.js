/*
 * Global is similar to Document in JS DOM
 * https://nodejs.org/api/globals.html
 */

 console.log("accessing code directory and filename from Global:");
 console.log("dirname:");
 console.log(__dirname);
 console.log("filename:");
 console.log(__filename);
 console.log();

 setTimeout(function countOneSec(){
    console.log("1 second just passed!");
    console.log();
 },1000);

 console.log("counting till 10...");
 var t = 0;
 var timer = setInterval(function pingEverySec(){
     t++;
     console.log(t+" seconds passed!");
     if(t===10){
         clearInterval(timer);
     }
},1000);

