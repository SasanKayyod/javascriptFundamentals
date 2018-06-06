//Parameters, passing values from one function to another function, empty place holder

function pet(animal){
    console.log(`I have a ${animal} for a pet.`)
}
pet('lizard')

//perameters go inside the functions.

//challenge
/*
first('Sasan')
last('Kayyod')

function first(name1) last(name2) {
    console.log(`My name is ${name1} ${name2}.`)
}

first('Sasan')
last('Kayyod') */

function myName (fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello my name is ${fullName}`);
}

myName('Tom','McClellan');






