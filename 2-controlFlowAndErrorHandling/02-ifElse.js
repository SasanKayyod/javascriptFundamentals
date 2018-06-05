// if else

var money = true;

if(money) {
    console.log('STARBUCKS!')
} else{
    console.log('Robin\'s coffee is fine')
}



//challenge:

var name = 'Sasan';

if(name == 'Sasan') {
    console.log('Hello, my name is Sasan')
} else {
    console.log('Hi, who are you?')
}


//challenge


//internet find
//var name = 'who';
//console.log (name.replace(/^[a-z]/, name[1].toUpperCase()));

//right way with if

var name ='sasan';

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log('Hello my name is', firstLetter)
} else{
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('Hello my name is', otherLetters)
}
    


//Else if

var type = true;

if(typeof type === 'string') {
    console.log(typeof type)
}else if (typeof type === 'boolean'){
    console.log(typeof type)
}else if (typeof type === 'number') {
    console.log(typeof type)
} else{
    console.log ('Something else');
}

//my work

var age = 21;

if(age <= 17){
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18){
    console.log("Yay! You can vote!")
} else if (age >= 21){
    console.log("Yay! You can drink!")
} else if (age >= 24){
    console.log("Yay! You can rent a car!")
}


//example

var age = 23;

if(age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21){
    console.log("Yay! You can drink!");
} else if (age >= 18){
    console.log("Yay! You can vote!");
} else if (age <= 17){
    console.log("Sorry, you're too young to do anything.");
}
