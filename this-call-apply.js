/*this is a context object in js */
var foo = function(v1,v2){
console.log(this);
console.log(v1,v2);

}
/* call and apply gives you option to bind an object to a method*/
foo.apply("hello",[2,5]); //gives output 2,5 same as foo(2,5) for apply method first argument is this object and second parameter is arguments
foo.call("world",2,5);//using call method you can send discrete values
/*foe both call and apply first parameter is this object*/

var sampleData ={name:"vikram",office:"guwahati",ph:"1234578"}
var foo1= function(v1,v2){
  console.log(this.name);
  console.log(v1,v2);
}
foo1.apply(sampleData,[2,5]);
foo1.call(sampleData,2,5);
