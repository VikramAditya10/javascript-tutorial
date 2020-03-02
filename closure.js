const foo = (x)=>{
  return (y)=>{
  return x + y;
  }
}
let add4 = foo(4);
let add7 = foo(7);
console.log(add4(10));// the valueof 4 has been saved previous;y
console.log(add7(10));
