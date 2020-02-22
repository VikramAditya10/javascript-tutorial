// JS doesnot have interface concept so we can use Symbol instead
class Person{
  [Symbol.for('activity')](){
    console.log('eating');
  }
activity(){
  console.log('playing');
}
}
const vikram = new Person();
const act = Symbol.for('activity')
vikram[act]();
vikram.activity();
//geneartors
class Wheel{}
class Car{
  constructor(){
    this.wheels=[new Wheel(),
    new Wheel(),
    new Wheel(),
    new Wheel(),
  ];
  }
  *[Symbol.iterator](){
    yield *this.wheels;
  }
}

const vehicle= new Car;
for(const wheel of vehicle)
{
  console.log(wheel);
}

// getters and setters

class Vehicle {
  constructor() {
  console.log('Car object created');
  }
  get color(){ // cant pass argument to getter
    return 'Silver';
  }
}
const car= new Vehicle();
console.log(car.color);
