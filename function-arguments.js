var max = function(a,b){
  if(a>b)
  return a;
  else
    return b;
}
 console.log("maximun is "+max(2,4));//output is 4 as it obvious from the code
 console.log("maximum is "+max(7,1,2));//returns 7 because 7 is greater than 1
console.log("maximum is "+max(2,1,7));// returns 2 as 2 is greater than 1 even though the function accepts n number of parameters it will only consider the first two
//in js an object called Arguments contains the list of parameters given to it
var argmnts = function(){
  console.log("argmnts called with "+arguments);
  return 1;
}
argmnts(1,7,2);


var foo = function(){
  var max =arguments[0];
  console.log(max);
return;
}
foo(7,5,2,9);
// we can rewrite the max as follows using arguments
var maximum= function(){
  var greater=arguments[0];
  for(var i=0;i<arguments.length;i++){
    if(arguments[i]>greater)
    greater = arguments[i];
  }
  return greater;
}
 console.log("using maximum function max is " + maximum(7,5,9,1,3,2));


// Default argument values

var greet = function(name,msg=`Hi ${name.length}`){
  console.log(`${msg} ${name}`);
}
// if we dont pass a argument then default argument will be used
greet('Vikram \u{1F600}');
greet('Vikram','Hello')
