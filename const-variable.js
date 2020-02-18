/*const only protects the reference to the variable it doesnot protects the object itself*/
const person = {name:"peter", age:"45"}
console.log(person);
person.name = "griffin";
console.log(person); // note that the value of name is changed because const allows to chnage the object
/*however Object.freeze() doesnot allow us to make changes to the object*/
const author = Object.freeze({name:"peter", age:"45"});
console.log(author);
author.name = "griffin";// throws error
console.log(author);
