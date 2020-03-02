console.time('program_timer');
let data=[{name:"john",lastname:"Doe",Age:"20"},
{name:"Priyanka",lastname:"Mali",Age:"25"},
{name:"Vikram",lastname:"Aditya",Age:"28"}]
console.table(data);
console.time('timer_for_loop');
  console.timeLog('timer_for_loop');

for(let i=0;i<10;i++)
{
  Math.random();
console.count('loop');
}
console.timeEnd('timer_for_loop');
console.timeLog('program_timer');
console.timeEnd('program_timer');
console.dir(data);
console.countReset('loop');
console.count('loop');
console.dirxml(console);
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
