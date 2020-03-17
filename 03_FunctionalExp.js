function callFunction(fun){
    fun();
}

fn = function sayHi(){
    console.log("Hi");
}

callFunction(fn);
