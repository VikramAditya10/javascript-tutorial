var Car= function(year){
  console.log("..car called..");
  this.year=year;
}
Car.prototype.drive= function(){
  console.log(".....Driving.............");
}
var car =new Car(2014);
console.log(car);
car.drive();
// prototypes are shared among objects

var Car= function(year){
  console.log("..car called..");
  this.year=year;
}
Car.prototype.km=0;
Car.prototype.drive= function(dist){
  console.log(".....Driving.............");
this.km=this.km+dist;
}

var car1 =new Car(2019);
var car2 =new Car(2020);
console.log(car1.km);
console.log(car2.km);
car1.drive(20);

for(var prop in car1){
  console.log(prop + " "+ car1[prop]); // prop acts sort of like hashmap it maps the name of the prop gives us the value eg. car1[year] gives output 2019,car1[km] gives 20 etc
}

// hasOwnProperty
var car3 = new Car(2021);

for(var prop in car3){
  console.log(prop + " "+ car3.hasOwnProperty(prop)); //here hasOwnProperty for prop km is false
}

car3.drive(50);
for(var prop in car3){
  console.log(prop + " "+ car3.hasOwnProperty(prop)); //here hasOwnProperty for prop km is true
}
delete car3.km;
console.log(car3.hasOwnProperty('km'));
