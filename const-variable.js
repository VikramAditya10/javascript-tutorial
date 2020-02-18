/*const only protects the reference to the variable it doesnot protects the object itself*/
const Person = {name:"peter", age:"45"}
console.log(Person);
Person.name = "griffin";
console.log(Person); // note that the value of name is changed because const allows to chnage the object
