function fun1(callback){
    console.log("Function 1 is executed.");
    callback();
}
function fun2(){
    console.log("Function 2 is executed.");
}
fun1(fun2);
// Output:
// Function 1 is executed.
// Function 2 is executed.