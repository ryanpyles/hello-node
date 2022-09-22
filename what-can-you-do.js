const prompt = require('prompt-sync')
({sigint: true});
let enterAge = Number(prompt("Please enter your age:  "));
console.log(enterAge);
if(enterAge < 16){
    console.log("You can't drive");
} else if(enterAge <= 17){
    console.log("You can drive, but not vote.");
} else if(enterAge <= 24){
    console.log("You can vote but not rent a car.");
} else if(enterAge <= 35){
    console.log("You can vote, run for congress, but not for President");
} else if(enterAge >= 59){
    console.log("You can join AARP!");
} else if(enterAge >= 63){
    console.log("You can now get your Social Security");
} else {
    console.log("Congrats, you can do anything, now wait to die.");
}
