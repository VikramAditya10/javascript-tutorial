// we can create classes on the fly using class factory
const classFactory = function(...properties){
  return class{
    constructor(...values){
      for (const [index,property] of properties.entries() ){
        this[property]=values[index];
      }   }
  }
}
const Book =classFactory('title','author');
const book1= new Book('Programming','James');
const book2= new Book('History','Joe');
console.log(book1);
console.log(book2);
const Music = classFactory('title','vol','artist');
const music1 = new Music('September','1','Green day');
const music2 = new Music('Try Hard','2','Roach');
console.log(music1);
console.log(music2);
