const prompt = require('prompt-sync')
({sigint: true});

let enterNumber = Number(prompt("Please enter a number between 1 and 7:  "));
console.log(enterNumber);
if(enterNumber === 1){
    console.log('Monday');
}else if(enterNumber === 2){
    console.log('Tuesday');
}else if(enterNumber === 3){
    console.log('Wednesday');
}else if(enterNumber === 4){
    console.log('Thursday');
}else if(enterNumber === 5){
    console.log('Friday');
}else if(enterNumber === 6){
    console.log('Saturday');
}else if(enterNumber === 7){
    console.log('Sunday');
} else{ 
    console.log(error);
}
