/*in js you can pass function to other functions*/
var list =[25,06,10];
list.forEach(function(e){
  console.log(e);
});
console.log(list.filter(function(e){
  return e%2 ==0;
}));
