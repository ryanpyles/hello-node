const prompt = require('prompt-sync')
({signit: true});

let weight = Number(prompt('Enter your Earth weight:  '));
console.log("Please enter the number of the planet you will be traveling to using the following system. 1- Venus, 2- Mars, 3- Jupiter, 4- Saturn, 5- Uranus, 6- Neptune");
let validWeight = true;

if(isNaN(weight) === true){
    console.log("Invalid weight");
    validWeight = false;
}
if(validWeight === true){

let planetNum = Number(prompt(">  "));
console.log(weight);
console.log(planetNum);

if(planetNum === 1){
    console.log("You picked Venus.");
    console.log(`Your weight needs to be: ${weight * 0.78} lbs`);
} else if(planetNum === 2){
    cosnole.log("You picked Mars.");
    console.log(`Your weight needs to be ${weight * 0.39} lbs`);
} else if(planetNum === 3){
    cosnole.log("You picked Jupiter.");
    console.log(`Your weight needs to be ${weight * 2.65} lbs`);
}  else if(planetNum === 4){
    cosnole.log("You picked Saturn.");
    console.log(`Your weight needs to be ${weight * 1.17} lbs`);
} else if(planetNum === 5){
    cosnole.log("You picked Uranus.");
    console.log(`Your weight needs to be ${weight * 1.05} lbs`);
} else if(planetNum === 6){
    cosnole.log("You picked Neptune.");
    console.log(`Your weight needs to be ${weight * 1.23} lbs`);
}
}