bar();
console.log("Running");
console.log("End ");

async function foo(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{

    resolve([2,5,7]);// try replacing resolve with return
  },1000);

} )}

 async function bar(){
 //let val = await foo();
   //console.log(val);
foo().then(values=>{console.log(values);})
  console.log('bar');
}
/*bar();
console.log("Running");
console.log("End ");

 function foo(){
  setTimeout(()=>{
    return [4,5,7];
  },100);}

  function bar(){
 let val =  foo();
   console.log(val);
//foo().then(values=>{cosnole.log(value[1]);})
  console.log('bar');
}*/
