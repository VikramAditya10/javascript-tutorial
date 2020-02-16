
/* because of function hoisting the javascript will only see the the second definition defeine
function like this is dicouraged in js although it is common method of function defintion in languages like c, c++, java etc.*/
function fun1(n){
  console.log("function fun1 called with value "+n);
}
fun1(7);
function fun1(n){
  console.log("fucntion fun1 redefined with value " +n);
}
fun1(25);
/*fucntion defintion should be done as follows to avoid function hoisting*/
var foo=function(n){
  console.log("fucntion foo called with value "+n);
}
foo(7);
var foo=function(n){
  console.log("function foo redifined with value "+n);
}
foo(25);
/*you can also declare a function as following however it is discouraged*/
var fun2= function fun2(n)
{
  console.log("function fun2 called by value "+ n);
}
fun2(10);
