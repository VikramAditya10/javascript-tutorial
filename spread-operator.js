var max= function(...numbers){
  return numbers.reduce((large,e) => e > large ? e : large);
}
const values = [1,45,55,12,10,11];
console.log(max(...values));
