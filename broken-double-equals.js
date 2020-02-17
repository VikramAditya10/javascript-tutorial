console.log(1 == "1") //  returns true
console.log(1 == "1.0") // returns true
console.log("1"=="1.0")// returns false doesnot follows transitivity rule
//  use triple equals as double equals does type conversion intrinsicly
console.log(1 === "1");// returns false
console.log(1 === "1.0");// returns false
console.log(1 === "1");// returns false
console.log(1 === 1.0); //  returns true
