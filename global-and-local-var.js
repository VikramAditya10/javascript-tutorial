
var foo= function(n){
  var local =5;
  some=6; // if we dont declare var infront of variable it becomes global
  console.log(local);
  console.log(some);
}
foo(6)
console.log(some); // we will get the value 6 because some is now a local varibale
