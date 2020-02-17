'use strict';
/* using var is not good as it does not define  any scope */
function foo () {
  var local1 = 1;
  {
    var local2 = 2;
    console.log(local2);
  }
  console.log(local1);
  console.log(local2); // this should have been inaccessible
}

foo()
/* use let for local varibales */
function foo1(){
  var local1 = 1;
  {
    let local2 = 2;
    console.log(local2)
  }
  console.log(local1)
  console.log(local2) // this is now inaccessible and throws error
}
foo1();
/* use const as it is immutable varibale*/
let factor = 4;
let printIt = e => console.log(e * 2)
factor = 0
printIt()

/* but if we use const for above code it will throw error and save us headache */
const factr = 4;
let printIt2 = e => console.log(e * 2)
factr = 0 // compiler will throw error at this line
printIt2()
