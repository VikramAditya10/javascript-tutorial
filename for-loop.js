
const list=['Vikram','Aditya','Tom'];

for(let i=0;i<list.length;i++){
console.log(`${i} ${list[i]}`)
}

for (const name of list){console.log(name);}

for(const entry of list.entries()){
  console.log(entry);
}
