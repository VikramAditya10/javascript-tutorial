var person={firstName:"Vikram",
lastName:"Aditya",
activity : function(action){
  console.log("...vikram is "+ action +" ....");
}}
console.log(person.firstName)
person.activity("coding");
var Car =function(){} // Car is a class uppercase C makes it class its a convention
/*in js class is not cretaed instead a constructor is called */
Car();
//becoms constructor

var Car= function(year){
  console.log("..car called..");
  this.year=year;
}
var foobar={year:0};
console.log(foobar);//foobar.year remains 0
Car.call(foobar,2014);
console.log(foobar);// foobar.year becomes 14 so dont do this

var car =new Car(2014);// new allocates memory to new instance Car
/*
1. It allocates memory for instance car
2. It then calls the method Car.call(car,2014)
3. assign car._proto_= Car.prototype;
*/
console.log(car);
