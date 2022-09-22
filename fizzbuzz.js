// This is a classic interview question. Write a program that asks the user for a number.
//  If the number is divisible by 3, the program logs "fizz". 
//  If the number is divisible by 5, log "buzz". 
//  If the number is divisible by 3 and 5, log "fizzbuzz".

const prompt = require('prompt-sync')
({sigint: true});
// let enterNumber = Number(prompt("pick a number, any number: "));
// console.log(enterNumber);

// if(enterNumber % 15 == 0){
//     console.log("FiizBuzz");
// }else if(enterNumber % 3 === 0){
//     console.log("Fizz");
// }else if(enterNumber % 5 === 0){
//     console.log("Buzz");
// }else{
//     console.log("You are a failure.");
// }
let enterNumber = Number(prompt("Pick a number between 1-10000: "));

for (let enterNumber = 1; enterNumber < 1000; enterNumber++) {
    if (enterNumber % 15 == 0) console.log("FizzBuzz");
    else if (enterNumber % 3 == 0) console.log("Fizz");
    else if (enterNumber % 5 == 0) console.log("Buzz");
    else console.log(enterNumber);
}